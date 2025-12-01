import type { Input, Options } from 'ky'

import type { MaybeNullable } from '@/shared/types'

export interface ApiError {
  message: string
  status: number
  code?: string
  details?: unknown
}

export interface NormalizedErrorBase {
  name: string
  message: string
  code?: string
  details?: unknown
}

export interface TimeoutError extends NormalizedErrorBase {
  name: 'TimeoutError'
}

export interface NetworkError extends NormalizedErrorBase {
  name: 'NetworkError'
}

export interface UnknownError extends NormalizedErrorBase {
  name: 'UnknownError'
  status: number
  statusText?: string
}

export interface HttpError extends NormalizedErrorBase {
  name: 'HttpError'
  status: number
  statusText?: string
  body?: unknown
}

export type ApiErrorBase =
  | TimeoutError
  | NetworkError
  | UnknownError
  | HttpError

export type RequestConfig = Omit<Options, 'json' | 'body'>

export interface GetRequestPayload {
  url: Input
  options?: Options
}

export interface DeleteRequestPayload extends GetRequestPayload {}

export interface MutationRequestPayload<TBody = unknown> {
  url: Input
  body?: TBody
  options?: RequestConfig
}

export interface ApiResponse<T = unknown> {
  message: string
  request_id: string
  error?: MaybeNullable<ApiErrorBase>
  data: MaybeNullable<T>
}

export interface ApiResponsePaginate {
  current_page: number
  per_page: number
  total: number
}

export interface ApiResponseWithPaginate<T> {
  message: string
  request_id: string
  error?: MaybeNullable<ApiErrorBase>
  data: MaybeNullable<{
    items: T[]
    paginate: ApiResponsePaginate
  }>
}
