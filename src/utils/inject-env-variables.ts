import fs from 'fs-extra'
import path from 'node:path'

export const injectEnvVariables =  ({envVariables, targetPath}:{envVariables: Record<string, string>, targetPath: string}) => {
  if (Object.entries(envVariables).length === 0) return

  if (!fs.existsSync(path.join(targetPath, '.env')))
    fs.writeFileSync(path.join(targetPath, '.env'), '')

  for (const [key, value] of Object.entries(envVariables)) {
    fs.appendFileSync(
      path.join(targetPath, '.env'),
      `${key}=${value}\n`,
    )
  }
}
