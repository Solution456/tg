import { isError } from '../utils/is'

export function toError<T>(
  value: T,
  unknownError = 'Unknown error'
): T extends Error ? T : Error {
  if (isError(value)) return value as any

  const error = new Error(unknownError)

  // @ts-expect-error
  if (Error.captureStackTrace) {
    // @ts-expect-error
    Error.captureStackTrace(error)
  }

  return error as any
}
