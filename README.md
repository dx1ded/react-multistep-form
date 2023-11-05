# react-multistep-form

> Easy to use Multi-step form component

![example picture](https://raw.githubusercontent.com/dx1ded/react-multistep-form/main/src/images/example.png) 


## Installation
Install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), [Vite](https://vitejs.dev/) etc).

```bash
npm install --save @dx1ded/react-multistep-form
```
or:
```bash
yarn add @dx1ded/react-multistep-form
```

## Get Started

Basically you're provided with two components:
* **Steps** - the component stores different steps of your multistep form
* **MergeSteps** - the component merges other steps components

## Examples
You can find examples in the repository:  
[Examples](https://github.com/dx1ded/react-multistep-form/tree/main/src/examples)

## Options

```ts
export type RenderProps<T> = {
  /**
   * Data object with all data you've passed in from different stages
   */
  data: T,
  /**
   * A function to save some data
   */
  setData: React.Dispatch<React.SetStateAction<object>>,
  /**
   * Disable buttons
   */
  setButtonsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  /**
   * Set the previous step
   */
  setPrevStep(pages?: number): void,
  /**
   * Set the next step
   */
  setNextStep(pages?: number): void
}

export type StepProps<U> = RenderProps<U> & {
  /**
   * Step title which will be shown on the top
   */
  title: string,
  /**
   * You can optionally set no progress bar for current step
   */
  noProgress?: boolean,
  /**
   * You can optionally set no navigation buttons for current step
   */
  noNavigation?: boolean,
  /**
   * If you want to use a middleware function you should specify this parameter for the step
   */
  hasMiddleware?: boolean
}

export type StepMiddleware = {
  /**
   * functions which will be invoked as a middleware.
   * In order to proceed to the prev / next step the function should return true (or false if shouldn't)
   * Prev is for "going prev" and next is for "going next"
   * @param setPrevStep
   */
  prev?(setPrevStep: (pages?: number) => void): boolean,
  /**
   * @param setNextStep
   */
  next?(setNextStep: (pages?: number) => void): boolean
}

export type StepsProps = {
  children: ((props: RenderProps<any>) => ReactElement) | ReactElement | ReactElement[],
  /**
   * A function will be invoked once the last step is passed
   * @param data
   */
  onSubmit?(data: unknown): void,
  /**
   * Data object which will be stored in state
   */
  data?: unknown,
  /**
   * Progress bar.
   * However, if the Steps component is merged (using MergeSteps) - it won't work for this component
   */
  hasProgress?: boolean,
  /**
   * Navigation buttons.
   * However, if the Steps component is merged (using MergeSteps) - it won't work for this component
   */
  hasNavigation?: boolean,
  /**
   * Primary color (active progress bar background / navigation buttons background)
   */
  primaryColor?: string,
  /**
   * Color for those elements of the progress bar which are not active
   */
  progressColor?: string,
  /**
   * Navigation buttons arrows color
   */
  navigationColor?: string,
  // For merged steps
  item?: number,
  mergedStep?: number,
  mergedButtonsDisabled?: boolean,
  mergedSetPrevStep?(pages?: number): void,
  mergedSetNextStep?(pages?: number): void
}
```