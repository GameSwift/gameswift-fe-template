import type { ZodType, z } from 'zod'

export const withHttpsProtocol = (path: string) => `https://${path}`

export const valuesFromSearchParams = (searchParams: URLSearchParams) =>
  Array.from(searchParams.keys()).reduce(
    (values, key) => {
      const value = searchParams.getAll(key)

      if (value.length === 1 && value[0] === '') {
        return values
      }

      return {
        ...values,
        [key]: value
      }
    },
    {} as Record<string, Array<string>>
  )

export const transformQueryParams = <T extends ZodType<unknown>>(
  params: z.TypeOf<T>
) => {
  const transformedParamsString = Object.entries(params as object)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return [...new Set(value)].map(v => `${key}=${v}`).join('&')
      }

      return `${key}=${value}`
    })
    .join('&')

  return transformedParamsString ? `?${transformedParamsString}` : ''
}
