import { useImperativeHandle, forwardRef, ChangeEvent, MouseEvent } from "react"
import { Steps, StepProps, StepMiddleware }  from "../lib"
import "../App.css"

// Importing basic styles (not required)
import "../lib/styles.css"

type DataObject = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  preference: boolean,
  chocolateBars?: number
}

// Here we determine the basic data object
const data: DataObject = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  preference: false,
  chocolateBars: 0
}

function Credentials({ setData }: StepProps<DataObject>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // Here we just save data once the input is changed
    // Be careful! Use useState callback to set prevState and then update the prop you want to
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

    // Here we want to skip the next page if obj.preference is false (user doesn't like chocolate so no sense to ask him how many bars do they eat)
    // That's why we use setNextStep by {pages}. We just say if obj.preference is true - go to the next page, if false - go 2 pages next (skipping the next one)
    setNextStep(obj.preference ? 1 : 2)
  }

  return (
    <div>
      <h2>Answer please</h2>
      <button type="button" value="no" onClick={clickHandler}>No</button>
      <button type="button" value="yes" onClick={clickHandler}>Yes</button>
    </div>
  )
}

// In order to create a middleware function you should put your component into forwardRef to get a ref parameter
const HowMuchChocolate = forwardRef(function HowMuchChocolate(
  { setData } : StepProps<DataObject>,
  ref
) {
  // Here's an example with middleware. We want to ask user if they want to proceed pressing the next button
  // If user chooses "no" it returns false and page doesn't change. If "yes" it returns true and page changes
  useImperativeHandle(ref, (): StepMiddleware => ({
    next() {
      // ! Don't forget, middleware function should always return boolean
      return window.confirm("Do you want to proceed?")
    }
  }))

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
  { data }: StepProps<DataObject>,
  ref
) {
  useImperativeHandle(ref, (): StepMiddleware => ({
    // Another example with middleware. We want to skip the page which asks "how many bars do we eat a week" if obj.preference is false
    // Here we use the parameter setPrevStepFn which is gives us for callback (!!! don't use setPrevStep from component props for this !!!)
    prev(setPrevStepFn) {
      if (!data.preference) {
        // Pages changed by 2
        setPrevStepFn(2)
        // Don't forget to return false, otherwise it will change the page by 1 more (because we return true below) which may be unexpected behavior
        return false
      }

      // Otherwise we return true and page changes by 1
      return true
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

export function BasicExample() {
  return (
    <Steps
      hasNavigation
      data={data}
      onSubmit={(data: DataObject) => console.log(data)}
    >
      {(props) => (
        // Don't forget to put React.Fragment even though you have only one Step
        <>
          <Credentials title="Credentials" {...props} />
          <UserInfo title="Basic information" {...props} />
          <PrefersChocolate title="Do you like chocolate?" {...props} noNavigation />
          {/* !!! Don't forget to put "hasMiddleware" if you use a middleware function in the component */}
          <HowMuchChocolate title="How much chocolate do you eat?" hasMiddleware {...props} />
          <Review title="Review" hasMiddleware {...props} />
        </>
      )}
    </Steps>
  )
}
