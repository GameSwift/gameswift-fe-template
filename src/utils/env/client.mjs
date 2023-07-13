import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const client = createEnv({
  client: {
    NEXT_PUBLIC_IS_PRODUCTION: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NEXT_PUBLIC_IS_PRODUCTION
  }
})
