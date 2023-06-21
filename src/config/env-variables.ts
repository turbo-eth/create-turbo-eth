import type { EnvVariables } from '../types'
import { z } from 'zod'

export const envVariables: EnvVariables = {
  NEXTAUTH_SECRET: {
    instructions: 'You can generate one at https://generate-secret.vercel.app/32.',
    message: 'Add a session secret of at least 32 characters:',
    required: false,
    validate: (input: string) => {
      if (z.string().min(32).optional().or(z.literal('')).safeParse(input).success) {
        return true
      }

      return 'Please enter a secret with at least 32 characters'
    },
  },
  DATABASE_URL: {
    instructions: 'Read more about database connection URLs at https://www.prisma.io/docs/reference/database-reference/connection-urls',
    message: 'Add a database connection url:',
    required: false,
    validate: (input: string) => {
      if (z.string().url().optional().or(z.literal('')).safeParse(input).success) {
        return true
      }

      return 'Please enter a valid database URL'
    },
  },
  APP_ADMINS: {
    message: 'Add the admin addresses of your app separated by commas:',
    required: false,
    validate: (input: string) => {
      if (
        z
          .string()
          .regex(/^(0x[a-fA-F0-9]{40}( *, *0x[a-fA-F0-9]{40})* *)*$/)
          .optional()
          .or(z.literal(''))
          .safeParse(input).success
      ) {
        return true
      }

      return 'Please enter a valid list of admin addresses'
    },
  },
  SITE_URL: {
    message: 'What is going to be the URL of your website?',
    required: false,
    validate: (input: string) => {
      if (z.string().url().optional().or(z.literal('')).safeParse(input).success) {
        return true
      }

      return 'Please enter a valid website URL'
    },
  },
}
