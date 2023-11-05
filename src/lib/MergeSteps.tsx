import {useState, useMemo, Children, cloneElement, ReactElement, useCallback} from "react"
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

  // We need that one to know how many children are in the component
  // Children will be invoked again later with all the required parameters
  const _childrenList = useMemo(() => Children.toArray(
    isFunction(children) ? children({} as RenderProps<typeof store>).props.children : children
    ) as ReactElement[], [children]
  )

  const ranges = useMemo(
    () =>
        _childrenList.reduce(
        (acc: number[], { props }, i) => (
          acc.push(
            Children.toArray(props.children).length +
            (i > 0 ? acc[i - 1] : i === 1 ? acc[i - 1] - 1 : 0)
          ),
          acc
        ),
        []
      ),
    [_childrenList]
  )

  const stagesList = useMemo(
    () =>
        _childrenList.reduce(
        (acc: number[][], _, i) => (
          acc.push([...Array(ranges[i] - (i > 0 ? ranges[i - 1] : 0)).keys()]),
          acc
        ),
        []
      ),
    [_childrenList, ranges]
  )

  const changeStep = useCallback((index: number) => {
    if (index === ranges[ranges.length - 1] && onSubmit) return onSubmit(store)

    const stage = ranges.findIndex((i) => i > index)
    const step = stagesList.flat()[index]

    setStage(stage)
    setStep(step)
    setItem(index)
  }, [onSubmit, ranges, stagesList, store])

  const invokedChildren = useMemo(() => Children.toArray(
    isFunction(children)
      ? children({
          data: store,
          setData: setStore,
          setButtonsDisabled,
          setPrevStep: (pages = 1) => changeStep(item - pages),
          setNextStep: (pages = 1) => changeStep(item + pages)
      } as RenderProps<typeof store>)
      : children
  ) as ReactElement[], [children, changeStep, item, store])

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
      {cloneElement(invokedChildren[0].props.children[stage], {
        children: invokedChildren[0].props.children[stage].props.children,
        hasProgress: false,
        hasNavigation,
        primaryColor,
        navigationColor,
        // Merged props
        item,
        mergedStep: step,
        mergedButtonsDisabled: buttonsDisabled,
        mergedSetPrevStep: (pages = 1) => changeStep(item - pages),
        mergedSetNextStep: (pages = 1) => changeStep(item + pages)
      } as StepsProps)}
    </div>
  )
}
