import type {EnvVariables} from '../types.js'
import {z} from 'zod'

export const envVariables: EnvVariables = {
  NEXTAUTH_SECRET: {
    instructions: 'You can generate one at https://generate-secret.vercel.app/32',
    message: 'Add a session secret of at least 32 characters:',
    validate: (input:string) => {
      if (z.string().min(32).safeParse(input).success) {
        return true
      }

      return 'Please enter a secret with at least 32 characters'
    },
  },
  DATABASE_URL: {
    instructions: 'Read more about database connection URLs at https://www.prisma.io/docs/reference/database-reference/connection-urls',
    message: 'Add a database connection url:',
    validate: (input:string) => {
      if (z.string().url().safeParse(input).success) {
        return true
      }

      return 'Please enter a valid database URL'
    },
  },
  APP_ADMINS: {
    message: 'Add the admin addresses of your app separated by commas:',
    validate: (input:string) => {
      if (z.string().regex(/^(0x[a-fA-F0-9]{40}( *, *0x[a-fA-F0-9]{40})* *)*$/).safeParse(input).success) {
        return true
      }

      return 'Please enter a valid list of admin addresses'
    },
  },
  SITE_URL: {
    message: 'What is going to be the URL of your website?',
    validate: (input:string) => {
      if (z.string().url().safeParse(input).success) {
        return true
      }

      return 'Please enter a valid website URL'
    },
  },
}
