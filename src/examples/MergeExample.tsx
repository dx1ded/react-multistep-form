import { ChangeEvent, MouseEvent } from "react"
import { MergeSteps, StepProps, Steps } from "../lib"

import "../lib/styles.css"

type DataType = {
  method: string,
  signIn: {
    login: string,
    password: string
  },
  signUp: {
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string
  }
}

const data: DataType = {
  method: "sign-up",
  signIn: {
    login: "",
    password: ""
  },
  signUp: {
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  }
}

function AuthMethod({ setData, setNextStep } : StepProps<DataType>) {
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value

    setData((prevState) => ({
      ...prevState,
      method: value
    }))

    setNextStep()
  }

  return (
    <div>
      <button type="button" value="sign-in" onClick={clickHandler}>Sign in</button>
      <button type="button" value="sign-up" onClick={clickHandler}>Sign up</button>
    </div>
  )
}

function SignIn({ setData }: StepProps<DataType>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState: DataType) => ({
      ...prevState,
      signIn: {
        ...prevState.signIn,
        [e.target.id]: e.target.value
      }
    }))
  }

  return (
    <div>
      <label htmlFor="login">Your login</label>
      <input type="text" placeholder="Login" id="login" onChange={changeHandler} />
      <label htmlFor="password">Your password</label>
      <input type="password" placeholder="Password" id="password" onChange={changeHandler} />
    </div>
  )
}

function SignUp({ setData }: StepProps<DataType>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState: DataType) => ({
      ...prevState,
      signUp: {
        ...prevState.signUp,
        [e.target.id]: e.target.value
      }
    }))
  }

  return (
    <div>
      <label htmlFor="email">Your email</label>
      <input type="email" placeholder="Email" id="email" onChange={changeHandler} />
      <label htmlFor="username">Your username</label>
      <input type="text" placeholder="Username" id="username" onChange={changeHandler} />
      <label htmlFor="password">Your password</label>
      <input type="password" placeholder="Password" id="password" onChange={changeHandler} />
      <label htmlFor="firstName">Your first name</label>
      <input type="text" placeholder="First name" id="firstName" onChange={changeHandler} />
      <label htmlFor="lastName">Your last name</label>
      <input type="text" placeholder="Last name" id="lastName" onChange={changeHandler} />
    </div>
  )
}

export function MergeExample() {
  return (
    <MergeSteps data={data} hasNavigation onSubmit={(data) => console.log(data)}>
      {(props) => (
        // Don't forget to put React.Fragment even though you have only one Steps component (however you wouldn't use MergeSteps if you had only one Steps :) )
        <>
          <Steps>
            <AuthMethod title="Choose auth method" {...props} />
          </Steps>
          {props.data?.method === "sign-up"
            ? (
              <Steps>
                <SignUp title="Sign up" {...props} />
              </Steps>
            )
            : (
              <Steps>
                <SignIn title="Sign in" {...props} />
              </Steps>
            )
          }
        </>
      )}
    </MergeSteps>
  )
}