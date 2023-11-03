import { forwardRef, useImperativeHandle } from "react"
import { Steps } from "./lib/Steps"
import {MergeSteps} from "./lib/MergeSteps";
import { StepProps, StepMiddleware } from "./lib/types"
import "./lib/styles.css"

const StepOne = forwardRef(function StepOne(
    { title }: StepProps,
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

function StepTwo({ title }: StepProps) {
  return (
    <h2>123</h2>
  )
}

function StepThree({ title }: StepProps) {
  return (
    <div>three</div>
  )
}

// export function App() {
//   return (
//     <Steps
//       hasNavigation
//       onSubmit={(data) => console.log(data)}
//     >
//       {(props) => (
//         <>
//           <StepOne title="Step one" hasMiddleware {...props} />
//           <StepTwo title="Step two" {...props} />
//           <StepThree title="Step three" {...props} />
//         </>
//       )}
//     </Steps>
//   )
// }

export function App() {
  return (
      <MergeSteps hasNavigation primaryColor="#FFFF00" onSubmit={(data) => console.log(data)}>
        {(props) => (
          <>
            <Steps>
              <StepOne title="Step one" hasMiddleware {...props} />
            </Steps>
            <Steps>
              <StepTwo title="Step two" {...props} />
              <StepThree title="Step three" {...props} />
            </Steps>
            <Steps>
              <StepTwo title="Step four" {...props} />
              <StepThree title="Step five" {...props} />
              <StepThree title="Step six" {...props} />
            </Steps>
          </>
        )}
      </MergeSteps>
  )
}