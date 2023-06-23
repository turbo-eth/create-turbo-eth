import { checkbox, confirm } from '@inquirer/prompts'
import { prodNetworkOptions, testNetworkOptions, defaultProdNetworks, defaultTestNetworks } from '../../config/networks'
import { AvailableProdNetworks, Context } from '../../types'

export const selectNetworks = async ({ context }: { context: Context }) => {
  const selectedProdNetworks: string[] = await checkbox({
    message: 'Which production networks would you like to support?',
    choices: Object.entries(prodNetworkOptions).map(([value, { name }]) => ({
      name,
      value,
    })),
  })

  const isCustomTestNetwork = await confirm({
    message: 'Would you like to select testnet networks? (if not, the testnets respective to the selected production networks will be added)',
  })

  let selectedTestNetworks: string[] = []
  if (isCustomTestNetwork) {
    selectedTestNetworks = await checkbox({
      message: 'Which test networks would you like to support?',
      choices: Object.entries(testNetworkOptions).map(([value, { name }]) => ({
        name,
        value,
      })),
    })
  } else {
    for (const prodNetwork of selectedProdNetworks as AvailableProdNetworks[]) {
      const testnets = prodNetworkOptions[prodNetwork].testnets
      if (testnets) {
        selectedTestNetworks = [...selectedTestNetworks, ...testnets]
      }
    }
  }

  context.set({
    envVariables: context.get().envVariables,
    integrations: context.get().integrations,
    networks: {
      production: selectedProdNetworks.length > 0 ? selectedProdNetworks : defaultProdNetworks,
      test: selectedTestNetworks.length > 0 ? selectedTestNetworks : defaultTestNetworks,
    },
  })
}
