export const isObject = (obj: unknown): obj is Record<string, unknown> =>
  obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

export const isString = (val: any): val is string => typeof val === 'string'

export const isError = (val: any): val is Error =>
  val instanceof Error ||
  (isObject(val) && isString(val.message) && isString(val.stack))
