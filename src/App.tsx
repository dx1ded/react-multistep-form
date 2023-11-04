import {useEffect, ChangeEvent, MouseEvent, useImperativeHandle, forwardRef} from "react"
import {Steps, StepProps, StepMiddleware} from "../dist"
import "./App.css"

// Importing basic styles (not required)
import "./lib/styles.css"

type DataObject = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  preference: boolean,
  chocolateBars?: number
}

const data: DataObject = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  preference: true,
  chocolateBars: 0
}

function Credentials({ setData }: StepProps<DataObject>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <div>
      <label htmlFor="email">Enter your e-mail</label>
      <input
        type="email"
        placeholder="E-mail"
        id="email"
        onChange={changeHandler}
      />
      <label htmlFor="password">Enter your password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={changeHandler}
      />
    </div>
  )
}

function UserInfo({ setData }: StepProps<DataObject>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <div>
      <label htmlFor="firstName">Enter your first name</label>
      <input
        type="text"
        placeholder="First name"
        id="firstName"
        onChange={changeHandler}
      />
      <label htmlFor="lastName">Enter your last name</label>
      <input
        type="text"
        placeholder="Last name"
        id="lastName"
        onChange={changeHandler}
      />
    </div>
  )
}

function PrefersChocolate({ setData, setNextStep }: StepProps<DataObject>) {
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const answer = (e.target as HTMLButtonElement).value
    const obj = { preference: true }

    if (answer === "no") {
      obj.preference = false
    }

    setData((prevState) => ({
      ...prevState,
      ...obj
    }))

    setNextStep()
  }

  return (
    <div>
      <h2>Answer please</h2>
      <button type="button" value="no" onClick={clickHandler}>No</button>
      <button type="button" value="yes" onClick={clickHandler}>Yes</button>
    </div>
  )
}

const HowMuchChocolate = forwardRef(function HowMuchChocolate(
  { data, setData, setNextStep } : StepProps<DataObject>,
  ref
) {
  useImperativeHandle(ref, (): StepMiddleware => ({
    next() {
      return window.confirm("Are you sure you want to proceed?")
    }
  }))

  useEffect(() => {
    if (!data.preference) setNextStep()
  }, [data.preference, setNextStep])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      chocolateBars: e.target.value
    }))
  }

  return (
      <div>
        <h2>Share your activity!</h2>
        <input type="text" placeholder="How many bars do you eat a week?" onChange={changeHandler} />
      </div>
  )
})

const Review = forwardRef(function Review(
  { data, setPrevStep, setButtonsDisabled }: StepProps<DataObject>,
  ref
) {
  useImperativeHandle(ref, (): StepMiddleware => ({
    prev() {
      return window.confirm("Are you sure you want to go back?")
    }
  }))

  return (
      <div>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
        <p>First name: {data.firstName}</p>
        <p>Last name: {data.lastName}</p>
        <p>Prefers chocolate?: {String(data.preference)}</p>
        {data.preference && <p>Bars a week: {data.chocolateBars}</p>}
      </div>
  )
})

export function App() {
  return (
    <Steps
      hasNavigation
      data={data}
      onSubmit={(data: DataObject) => console.log(data)}
    >
      {(props) => (
        <>
          <Credentials title="Credentials" {...props} />
          <UserInfo title="Basic information" {...props} />
          <PrefersChocolate title="Do you like chocolate?" {...props} />
          <HowMuchChocolate title="How much chocolate do you eat?" {...props} />
          <Review title="Review" hasMiddleware {...props} />
        </>
      )}
    </Steps>
  )
}
