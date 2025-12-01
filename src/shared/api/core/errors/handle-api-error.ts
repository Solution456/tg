import { HTTPError, TimeoutError } from 'ky'

import type { ApiError } from '../types'

import { httpError, networkError, timeoutError, unknownError } from './errors'

import { toError } from '@/shared/helpers/to-error'

export async function handleApiError(error: unknown) {
  if (error instanceof HTTPError) {
    const status = error.response.status

    let errorData: ApiError
    try {
      const body = await error.response.json()

      errorData = {
        message: body.message || error.message,
        status,
        code: body.code || `HTTP_${status}`,
        details: body
      }
    } catch {
      errorData = {
        message: error.message,
        status,
        code: `HTTP_${status}`
      }
    }

    return httpError({
      message: errorData.message,
      status: errorData.status,
      code: errorData.code
    })
  }

  if (error instanceof TimeoutError) {
    return timeoutError({
      message: 'Request timeout: Превышено время ожидания',
      status: 504,
      code: 'TIMEOUT'
    })
  }

  if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
    return networkError({
      message: 'Network error: ошибка сети',
      status: 0
    })
  }

  return unknownError({
    message: toError(error).message || 'Unknown error',
    status: 500,
    code: 'UNKNOWN_ERROR'
  })
}
