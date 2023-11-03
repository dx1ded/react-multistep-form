import React, { ReactElement } from "react";
export type RenderProps = {
    /**
     * Data object with all data you've passed in from different stages
     */
    data: object;
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
export type StepProps = RenderProps & {
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
    fn: (...args: any[]) => boolean;
};
export type StepsProps = {
    children: ((props: RenderProps) => ReactElement) | ReactElement | ReactElement[];
    /**
     * A function will be invoked once the last step is passed
     * @param data
     */
    onSubmit?(data: object): void;
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
    defaultStep?: number;
    defaultData?: object;
    defaultSetPrevStep?(): void;
    defaultSetNextStep?(): void;
    defaultSetData?: React.Dispatch<React.SetStateAction<object>>;
};
