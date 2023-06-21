import fs from 'fs-extra'
import validate from 'validate-npm-package-name'
import path from 'node:path'

export const validateProjectName = ({ projectName, projectPath }: { projectName: string; projectPath: string }) => {
  const { validForNewPackages } = validate(projectName)

  if (!validForNewPackages) {
    return `${projectName} is not a valid project name.`
  }

  const targetPath = path.join(process.cwd(), projectPath)
  if (fs.pathExistsSync(targetPath)) {
    return `${projectName} directory already exists.`
  }

  return true
}
