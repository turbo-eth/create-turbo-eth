
import {checkbox} from '@inquirer/prompts'
import {integrations} from '../../config/integrations'

export const selectIntegrations = async () => {
  const selectedIntegrations: string[] = await checkbox({
    message: 'Which integrations would you like to add?',
    choices: Object.entries(integrations).map(([value, {name}]) => ({
      name,
      value,
    }),
    )},
  )
  return selectedIntegrations
}
