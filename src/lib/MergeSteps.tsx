import { useState, useMemo, Children, cloneElement, ReactElement } from "react"
import { RenderProps, StepsProps } from "./types"
import { isFunction } from "./utils"

export function MergeSteps({
   children,
   data = {},
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
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false)
  const [store, setStore] = useState<typeof data>(data)

  const invokedChildren = useMemo(() => Children.toArray(
    isFunction(children)
      ? children({} as RenderProps<typeof store>).props.children
      : children
    ) as ReactElement[],
    [children]
  )

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
    [invokedChildren]
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
    [invokedChildren, ranges]
  )

  const changeStep = (index: number): void => {
    if (index === ranges[ranges.length - 1] && onSubmit) return onSubmit(store)

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
            (acc: number[], stages, i) => (
              i <= stage ? acc.push(...stages) : acc.push(0), acc
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
        mergedStep: step,
        mergedStore: store,
        mergedSetStore: setStore,
        mergedButtonsDisabled: buttonsDisabled,
        mergedSetButtonsDisabled: setButtonsDisabled,
        mergedSetPrevStep: () => changeStep(item - 1),
        mergedSetNextStep: () => changeStep(item + 1)
      } as StepsProps)}
    </div>
  )
}
