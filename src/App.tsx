import { forwardRef, useImperativeHandle } from "react"
import { StepElement, Steps, StepMiddleware } from "./lib/Steps"
import "./lib/styles.css"

const StepOne = forwardRef(function StepOne(
    { title }: StepElement,
    ref
) {
  useImperativeHandle(ref, (): StepMiddleware => ({
    fn() {
      console.log(123)
      return true
    }
  }))

  return (
    <div>one</div>
  )
})

function StepTwo({ title }: StepElement) {
  return (
    <h2>123</h2>
  )
}

function StepThree({ title }: StepElement) {
  return (
    <div>three</div>
  )
}

export function App() {
  return (
    <Steps
      hasNavigation
      onSubmit={(data) => console.log(data)}
    >
      {(props) => (
        <>
          <StepOne title="Step one" hasMiddleware {...props} />
          <StepTwo title="Step two" {...props} />
          <StepThree title="Step three" {...props} />
        </>
      )}
    </Steps>
  )
}