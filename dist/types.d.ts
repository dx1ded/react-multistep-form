import React, { ReactElement } from "react";
export type RenderProps<T> = {
    /**
     * Data object with all data you've passed in from different stages
     */
    data: T;
    /**
     * A function to save some data
     */
    setData: React.Dispatch<React.SetStateAction<object>>;
    /**
     * Disable buttons
     */
    setButtonsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Set the previous step
     */
    setPrevStep(): void;
    /**
     * Set the next step
     */
    setNextStep(): void;
};
export type StepProps<U> = RenderProps<U> & {
    /**
     * Step title which will be shown on the top
     */
    title: string;
    /**
     * You can optionally set no progress bar for current step
     */
    noProgress?: boolean;
    /**
     * You can optionally set no navigation buttons for current step
     */
    noNavigation?: boolean;
    /**
     * If you want to use a middleware function you should specify this parameter for the step
     */
    hasMiddleware?: boolean;
};
export type StepMiddleware = {
    /**
     * A function which will be invoked as a middleware.
     * In order to proceed to the next step the function should return true (or false if shouldn't)
     * @param args
     */
    prev?(): boolean;
    next?(): boolean;
};
export type StepsProps = {
    children: ((props: RenderProps<any>) => ReactElement) | ReactElement | ReactElement[];
    /**
     * A function will be invoked once the last step is passed
     * @param data
     */
    onSubmit?(data: unknown): void;
    /**
     * Data object which will be stored in state
     */
    data?: unknown;
    /**
     * Progress bar.
     * However, if the Steps component is merged (using MergeSteps) - it won't work for this component
     */
    hasProgress?: boolean;
    /**
     * Navigation buttons.
     * However, if the Steps component is merged (using MergeSteps) - it won't work for this component
     */
    hasNavigation?: boolean;
    /**
     * Primary color (active progress bar background / navigation buttons background)
     */
    primaryColor?: string;
    /**
     * Color for those elements of the progress bar which are not active
     */
    progressColor?: string;
    /**
     * Navigation buttons arrows color
     */
    navigationColor?: string;
    item?: number;
    mergedStep?: number;
    mergedStore?: object;
    mergedSetStore?: React.Dispatch<React.SetStateAction<object>>;
    mergedButtonsDisabled?: boolean;
    mergedSetButtonsDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
    mergedSetPrevStep?(): void;
    mergedSetNextStep?(): void;
};
