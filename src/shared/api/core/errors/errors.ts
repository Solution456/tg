import type {
  ApiError,
  HttpError,
  NetworkError,
  TimeoutError,
  UnknownError
} from '../types'

export const httpError = (errorData: ApiError): HttpError => ({
  name: 'HttpError',
  message: errorData.message,
  status: errorData.status,
  statusText: errorData.code
})

export const timeoutError = (errorData: ApiError): TimeoutError => ({
  name: 'TimeoutError',
  message: errorData.message
})

export const networkError = (error: ApiError): NetworkError => ({
  name: 'NetworkError',
  message: error.message
})

export const unknownError = (error: ApiError): UnknownError => ({
  name: 'UnknownError',
  message: error.message,
  status: 500,
  statusText: error.code
})
