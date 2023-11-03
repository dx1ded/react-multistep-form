import React, { useState, useMemo, Children, cloneElement, ReactElement } from "react"
import { RenderProps, StepsProps } from "../types"
import { isFunction } from "../utils"

export function MergeSteps({
   children,
   onSubmit,
   hasProgress = true,
   hasNavigation,
   primaryColor = "#fe5f1e",
   progressColor = "#f4f4f4",
   navigationColor = "#fff"
}: StepsProps) {
  const [stage, setStage] = useState<number>(0)
  const [step, setStep] = useState<number>(0)
  const [item, setItem] = useState<number>(0)
  const [data, setData] = useState<object>({})

  const invokedChildren = Children.toArray(
    isFunction(children)
      ? children({
          data,
          setData
        } as RenderProps).props.children
      : children
  ) as ReactElement[]

  const ranges = useMemo(
    () =>
      invokedChildren.reduce(
        (acc: number[], { props }, i) => (
          acc.push(
            Children.toArray(props.children).length +
            (i > 0 ? acc[i - 1] : i === 1 ? acc[i - 1] - 1 : 0)
          ),
          acc
        ),
        []
      ),
    [children]
  )

  const stagesList = useMemo(
    () =>
      invokedChildren.reduce(
        (acc: number[][], _, i) => (
          acc.push([...Array(ranges[i] - (i > 0 ? ranges[i - 1] : 0)).keys()]),
          acc
        ),
        []
      ),
    [ranges, children]
  )

  const changeStep = (index: number): void => {
    if (index === ranges[ranges.length - 1]) return onSubmit!(data)

    const stage = ranges.findIndex((i) => i > index)
    const step = stagesList.flat()[index]

    setStage(stage)
    setStep(step)
    setItem(index)
  }

  return (
    <div className="merged-steps">
      <div className="steps-progress">
        {hasProgress && stagesList
          .reduce(
            (acc: any[], stages, i) => (
              i <= stage ? acc.push(...stages) : acc.push([]), acc
            ),
            []
          )
          .map((_, i) => (
            <button
              type="button"
              key={i}
              style={{ backgroundColor: i <= item ? primaryColor : progressColor }}
              aria-label={`Step ${i + 1}`}
              disabled={i > step}
              onClick={() => i < item && changeStep(i)}
            />
          ))
        }
      </div>
      {cloneElement(invokedChildren[stage], {
        children: invokedChildren[stage].props.children,
        onSubmit,
        hasProgress: false,
        hasNavigation,
        primaryColor,
        progressColor,
        navigationColor,
        item,
        defaultStep: step,
        defaultData: data,
        defaultSetPrevStep: () => changeStep(item - 1),
        defaultSetNextStep: () => changeStep(item + 1),
        defaultSetData: setData
      } as StepsProps)}
    </div>
  )
}
