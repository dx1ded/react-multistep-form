export const isFunction = (value: unknown): value is (...args: never) => unknown => {
  return typeof value === "function"
}
