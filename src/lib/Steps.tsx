import { useState, useCallback, useMemo, useRef, Children, cloneElement, ReactElement } from "react"
import { RenderProps, StepsProps, StepMiddleware } from "./types"
import { isFunction } from "./utils"
export function Steps({
  children,
  data = {},
  onSubmit,
  hasProgress = true,
  hasNavigation,
  primaryColor = "#fe5f1e",
  progressColor = "#f4f4f4",
  navigationColor = "#fff",
  // Merged steps props
  item,
  mergedStep,
  mergedButtonsDisabled,
  mergedSetPrevStep,
  mergedSetNextStep
}: StepsProps) {
  const [step, setStep] = useState<number>(0)
  const [store, setStore] = useState<typeof data>(data)
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false)
  const middleware = useRef<StepMiddleware>(null)

  // This thing is invoked because we need children.length for setNextStep()
  const _childrenList = useMemo(() => Children.toArray(
    isFunction(children) ? children({} as RenderProps<typeof data>).props.children : children
  ), [children])

  const setPrevStep = useCallback((pages = 1) => {
    const m = middleware.current
    const setStepFn = mergedSetPrevStep
      ? ((pages: number = 1) => mergedSetPrevStep(pages))
      : ((pages: number = 1) => setStep((prev) => prev - pages))

    const fn = mergedSetPrevStep
      ? (() => {
          if (m && m.prev && !m.prev(setStepFn)) return
          mergedSetPrevStep(pages)
        })
      : (() => {
          if (m && m.prev && !m.prev(setStepFn)) return
          setStep((prev) => prev - pages)
        })

    fn()
  }, [mergedSetPrevStep])

  const setNextStep = useCallback((pages = 1) => {
    const m = middleware.current
    const setStepFn = mergedSetNextStep
      ? ((pages: number = 1) => mergedSetNextStep(pages))
      : ((pages: number = 1) => setStep((prev) => prev + pages))

    const fn = mergedSetNextStep
      ? (() => {
        if (m && m.next && !m.next(setStepFn)) return
        mergedSetNextStep(pages)
      })
      : (() => {
        if (m && m.next && !m.next(setStepFn)) return
        if (step === _childrenList.length - 1 && onSubmit) return onSubmit(store)
        setStep((prev) => prev + pages)
      })

    fn()
  }, [_childrenList.length, mergedSetNextStep, onSubmit, step, store])

  const invokedChildren = useMemo(() => Children.toArray(
    isFunction(children)
      ? children({
          data: store,
          setData: setStore,
          setButtonsDisabled: setButtonsDisabled,
          setPrevStep,
          setNextStep
        } as RenderProps<typeof data>).props.children
      : children
    ) as ReactElement[],
    [children, store, setPrevStep, setNextStep]
  )

  const currentElement = invokedChildren[mergedStep ?? step]

  const withProgress = currentElement.props.noProgress ? false : hasProgress
  const withNavigation = currentElement.props.noNavigation ? false : hasNavigation

  return (
    <div className="steps">
      {withProgress && (
        <div className="steps-progress">
          {invokedChildren.map((_, i) => (
            <button
              type="button"
              key={i}
              style={{ backgroundColor: i <= step ? primaryColor : progressColor }}
              aria-label={`Step ${i + 1}`}
              disabled={i > step || mergedButtonsDisabled || buttonsDisabled}
              onClick={() => setStep(i)}
            />
          ))}
        </div>
      )}
      <h2 className="steps__title">{currentElement.props.title}</h2>
      <div className="steps__body">
        {currentElement.props.hasMiddleware
          ? cloneElement(currentElement, { ref: middleware })
          : currentElement
        }
      </div>
      {withNavigation && (
        <div className="steps__nav">
          {(step !== 0 || (item ? item > 0 : false)) && (
            <button
              type="button"
              className="steps__navBtn steps__navBtn--prev"
              style={{ backgroundColor: primaryColor }}
              aria-label="Previous step"
              disabled={mergedButtonsDisabled || buttonsDisabled}
              onClick={() => setPrevStep()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill={navigationColor}>
                <path d="M 19.8125 13.09375 C 19.59375 13.132813 19.398438 13.242188 19.25 13.40625 L 8.34375 24.28125 L 7.65625 25 L 8.34375 25.71875 L 19.25 36.59375 C 19.492188 36.890625 19.878906 37.027344 20.253906 36.941406 C 20.625 36.855469 20.917969 36.5625 21.003906 36.191406 C 21.089844 35.816406 20.953125 35.429688 20.65625 35.1875 L 11.46875 26 L 41 26 C 41.359375 26.003906 41.695313 25.816406 41.878906 25.503906 C 42.058594 25.191406 42.058594 24.808594 41.878906 24.496094 C 41.695313 24.183594 41.359375 23.996094 41 24 L 11.46875 24 L 20.65625 14.8125 C 20.980469 14.511719 21.066406 14.035156 20.871094 13.640625 C 20.679688 13.242188 20.246094 13.023438 19.8125 13.09375 Z"/>
              </svg>
            </button>
          )}
          <button
            type="button"
            className="steps__navBtn steps__navBtn--next"
            style={{ backgroundColor: primaryColor }}
            aria-label="Next step"
            disabled={mergedButtonsDisabled || buttonsDisabled}
            onClick={() => setNextStep()}
          >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px" fill={navigationColor}>
              <path d="M 29.84375 13.09375 C 29.46875 13.160156 29.167969 13.433594 29.0625 13.796875 C 28.957031 14.164063 29.066406 14.554688 29.34375 14.8125 L 38.53125 24 L 9 24 C 8.96875 24 8.9375 24 8.90625 24 C 8.355469 24.027344 7.925781 24.496094 7.953125 25.046875 C 7.980469 25.597656 8.449219 26.027344 9 26 L 38.53125 26 L 29.34375 35.1875 C 29.046875 35.429688 28.910156 35.816406 28.996094 36.191406 C 29.082031 36.5625 29.375 36.855469 29.746094 36.941406 C 30.121094 37.027344 30.507813 36.890625 30.75 36.59375 L 41.65625 25.71875 L 42.34375 25 L 41.65625 24.28125 L 30.75 13.40625 C 30.542969 13.183594 30.242188 13.070313 29.9375 13.09375 C 29.90625 13.09375 29.875 13.09375 29.84375 13.09375 Z"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
