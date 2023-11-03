import React, { ReactElement } from "react"

export type RenderProps = {
  data: object,
  setData: React.Dispatch<React.SetStateAction<object>>,
  setButtonsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setPrevStep(): void,
  setNextStep(): void,
}

export type StepProps = RenderProps & {
  title: string,
  noProgress?: boolean,
  noNavigation?: boolean
  hasMiddleware?: boolean,
}

export type StepMiddleware = {
  fn: (...args: any[]) => boolean
}

export type StepsProps = {
  children: ((props: RenderProps) => ReactElement) | ReactElement | ReactElement[],
  onSubmit?(data: object): void,
  hasProgress?: boolean,
  hasNavigation?: boolean,
  primaryColor?: string,
  progressColor?: string,
  navigationColor?: string,
  // For merged steps
  item?: number,
  defaultStep?: number,
  defaultData?: object,
  defaultSetPrevStep?(): void,
  defaultSetNextStep?(): void,
  defaultSetData?: React.Dispatch<React.SetStateAction<object>>
}
