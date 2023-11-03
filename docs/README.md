react-multistep-form / [Exports](modules.md)

# react-multistep-form

> Easy to use Multi-step form component

## Installation
Install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

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

So let's do our basic example:

```tsx

```

## API

### Type Aliases

- [RenderProps](modules.md#renderprops)
- [StepMiddleware](modules.md#stepmiddleware)
- [StepProps](modules.md#stepprops)
- [StepsProps](modules.md#stepsprops)

## Type Aliases

### RenderProps

Ƭ **RenderProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | Data object with all data you've passed in from different stages |
| `setButtonsDisabled` | `React.Dispatch`\<`React.SetStateAction`\<`boolean`\>\> | Disable buttons |
| `setData` | `React.Dispatch`\<`React.SetStateAction`\<`object`\>\> | A function to save some data |
| `setNextStep` | () => `void` | Set the next step |
| `setPrevStep` | () => `void` | Set the previous step |

#### Defined in

[types.ts:3](https://github.com/dx1ded/react-multistep-form/blob/8d497a0/src/types.ts#L3)

___

### StepMiddleware

Ƭ **StepMiddleware**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `boolean` |

#### Defined in

[types.ts:45](https://github.com/dx1ded/react-multistep-form/blob/8d497a0/src/types.ts#L45)

___

### StepProps

Ƭ **StepProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hasMiddleware?` | `boolean` | If you want to use a middleware function you should specify this parameter for the step |
| `noNavigation?` | `boolean` | You can optionally set no navigation buttons for current step |
| `noProgress?` | `boolean` | You can optionally set no progress bar for current step |
| `title` | `string` | Step title which will be shown on the top |

#### Defined in

[types.ts:26](https://github.com/dx1ded/react-multistep-form/blob/8d497a0/src/types.ts#L26)

___

### StepsProps

Ƭ **StepsProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | (`props`: [`RenderProps`](modules.md#renderprops)) => `ReactElement` \| `ReactElement` \| `ReactElement`[] | - |
| `defaultData?` | `object` | - |
| `defaultSetData?` | `React.Dispatch`\<`React.SetStateAction`\<`object`\>\> | - |
| `defaultStep?` | `number` | - |
| `hasNavigation?` | `boolean` | Navigation buttons. However, if the Steps component is merged (using MergeSteps) - it won't work for this component |
| `hasProgress?` | `boolean` | Progress bar. However, if the Steps component is merged (using MergeSteps) - it won't work for this component |
| `item?` | `number` | - |
| `navigationColor?` | `string` | Navigation buttons arrows color |
| `primaryColor?` | `string` | Primary color (active progress bar background / navigation buttons background) |
| `progressColor?` | `string` | Color for those elements of the progress bar which are not active |
| `defaultSetNextStep?` | () => `void` | - |
| `defaultSetPrevStep?` | () => `void` | - |
| `onSubmit?` | (`data`: `object`) => `void` | A function will be invoked once the last step is passed |

#### Defined in

[types.ts:54](https://github.com/dx1ded/react-multistep-form/blob/8d497a0/src/types.ts#L54)