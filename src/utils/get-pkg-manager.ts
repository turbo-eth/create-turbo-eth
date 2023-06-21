import type { PackageManager } from '../types'

export const getPackageManager = (flags: Record<string, string | boolean | undefined>): PackageManager => {
  const userAgent = process.env.npm_config_user_agent

  if (flags.pnpm) return 'pnpm'
  if (flags.yarn) return 'yarn'
  if (flags.npm) return 'npm'

  if (userAgent) {
    if (userAgent.includes('pnpm')) return 'pnpm'
    if (userAgent.includes('yarn')) return 'yarn'
    return 'npm'
  }

  return 'npm'
}
