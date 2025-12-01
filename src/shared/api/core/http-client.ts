import { handleApiError } from './errors/handle-api-error'
import kyInstance from './instance'
import type {
  ApiErrorBase,
  DeleteRequestPayload,
  GetRequestPayload,
  MutationRequestPayload
} from './types'

import type { MaybeNullable } from '@/shared/types'

const getResponse = <T>({
  data,
  error = null
}: {
  data: Awaited<T>
  error?: MaybeNullable<ApiErrorBase>
}) => {
  const _res = data ?? { data: null }
  return {
    ..._res,
    error
  }
}

export function createHttpClient() {
  const get = async <TResponse = unknown>({
    url,
    options
  }: GetRequestPayload) => {
    try {
      const response = await kyInstance.get(url, options).json<TResponse>()
      return getResponse({
        data: response,
        error: null
      })
    } catch (error) {
      return getResponse({
        data: null,
        error: await handleApiError(error)
      })
    }
  }
  const post = async <TResponse = unknown>({
    url,
    body,
    options
  }: MutationRequestPayload) => {
    try {
      const response = await kyInstance
        .post(url, {
          json: body,
          ...(options as any)
        })
        .json<TResponse>()
      return getResponse({
        data: response,
        error: null
      })
    } catch (error) {
      return getResponse({
        data: null,
        error: await handleApiError(error)
      })
    }
  }
  const put = async <TResponse = unknown>({
    url,
    options,
    body
  }: MutationRequestPayload) => {
    try {
      const response = await kyInstance
        .put(url, {
          json: body,
          ...(options as any)
        })
        .json<TResponse>()
      return getResponse<TResponse>({
        data: response,
        error: null
      })
    } catch (error) {
      return getResponse({
        data: null,
        error: await handleApiError(error)
      })
    }
  }
  const del = async <TResponse = unknown>({
    url,
    options
  }: DeleteRequestPayload) => {
    try {
      const response = await kyInstance.delete(url, options).json<TResponse>()
      return getResponse({
        data: response,
        error: null
      })
    } catch (error) {
      return getResponse({
        data: null,
        error: await handleApiError(error)
      })
    }
  }
  const patch = async <TResponse = unknown>({
    url,
    options,
    body
  }: MutationRequestPayload) => {
    try {
      const response = await kyInstance
        .patch(url, {
          json: body,
          ...(options as any)
        })
        .json<TResponse>()
      return getResponse({
        data: response,
        error: null
      })
    } catch (error) {
      return getResponse({
        data: null,
        error: await handleApiError(error)
      })
    }
  }

  return {
    get,
    post,
    put,
    del,
    patch
  }
}

export const httpClient = createHttpClient()
