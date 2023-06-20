
export const envVariables = {
  sessionSecret: {
    name: 'Next Session Secret',
    message: 'Add a session secret of at least 32 characters',
    env: 'NEXTAUTH_SECRET',
    validate: (input:string) => {
      if (input.length < 32) {
        return 'Please enter a secret with at least 32 characters'
      }

      return true
    },
  },
  databaseUrl: {
    name: 'Database URL',
    message: ' Add a database connection url',
    env: 'DATABASE_URL',
    validate: (input:string) => {
      if (input.length === 0) {
        return 'Please enter a valid database URL'
      }

      return true
    },
  },
  appAdmins: {
    name: 'App Admins',
    message: 'Add the admin addresses of your app separated by  commas',
    env: 'APP_ADMINS',
    validate: (input:string) => {
      if (!/^(0x[\dA-Fa-f]{40}( *, *0x[\dA-Fa-f]{40})* *)*$/.test(input.trim())) {
        return 'Please enter a valid list of admin addresses'
      }

      return true
    },
  },
  websiteUrl: {
    name: 'Website URL',
    message: 'What is going to be the URL of your website?',
    env: 'SITE_URL',
    validate: (input:string) => {
      if (input.length === 0) {
        return 'Please enter a valid website URL'
      }

      return true
    },
  },
}
