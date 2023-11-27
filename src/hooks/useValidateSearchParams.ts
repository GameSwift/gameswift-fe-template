import { ZodType, z } from 'zod'
import { type NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter, useSearchParams } from 'next/navigation'
import { transformQueryParams, valuesFromSearchParams } from '@/utils/url'

export const useValidateSearchParams = <T extends ZodType<unknown>>(
  schema: T
) => {
  const { replace } = useRouter()
  const rawParams = useSearchParams()
  const rawValues = valuesFromSearchParams(rawParams)
  const validatedParams = schema.parse(rawValues) as z.infer<T>

  return {
    rawParams,
    rawValues,
    validatedParams,
    validateParamsAsync: async () =>
      (await schema.parseAsync(rawValues)) as Promise<z.infer<T>>,
    replaceParams: (
      path: string,
      onSetParams: (prevParams: z.infer<T>) => z.infer<T>,
      options: NavigateOptions = { scroll: false }
    ) => {
      const pathWithQuery = `${path}${transformQueryParams(
        onSetParams(validatedParams)
      )}`

      return replace(pathWithQuery, options)
    }
  }
}
