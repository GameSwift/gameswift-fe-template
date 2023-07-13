import { type Metadata } from 'next'
import { AppName } from '@/config'

export const getMetadata = ({ title, ...metadata }: Metadata): Metadata => ({
  title: title ? `${title} | ${AppName}` : AppName,
  description:
    'A starter for Next.js using app router with TypeScript and Tailwind CSS.',
  ...metadata
})
