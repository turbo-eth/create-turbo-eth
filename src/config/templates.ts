import { z } from 'zod'
import { Templates } from '../types'

export const templateOptions: Templates = {
  'template-disco-app': {
    git: 'https://github.com/turbo-eth/template-disco-app',
    name: 'Networks 🪩 Disco App Template',
    description: 'A TurboETH template for building next generation identity applications powered by Disco.',
    url: 'https://disco.turboeth.xyz/',
    env: {
      DISCO_API_KEY: {
        message: 'What is your Disco API Key?',
        instructions: 'You can request your Disco API Key at https://discoxyz.typeform.com/requestapi',
        validate: (input: string) => {
          if (z.string().min(1).safeParse(input).success) {
            return true
          }

          return 'Disco API Key is required'
        },
      },
    },
  },
  'template-tally-app': {
    git: 'https://github.com/turbo-eth/template-tally-app',
    name: 'Council 🏛️ Tally App Template',
    description: 'A TurboETH template for building governance applications powered by Tally and OpenAI.',
    url: 'https://tally.turboeth.xyz/',
    env: {
      NEXT_PUBLIC_TALLY_API_KEY: {
        message: 'What is your Tally API Key?',
        instructions: 'You can get your API keys at https://tally.xyz/user/settings',
        validate: (input: string) => {
          if (z.string().min(1).safeParse(input).success) {
            return true
          }

          return 'Tally API Key is required'
        },
      },
      OPENAI_API_KEY: {
        message: 'What is your OpenAI API Key?',
        instructions: 'You can get your API keys at https://platform.openai.com/account/api-keys',
        validate: (input: string) => {
          if (z.string().min(1).safeParse(input).success) {
            return true
          }

          return 'OpenAI API Key is required'
        },
      },
    },
  },
  'template-bank-app': {
    git: 'https://github.com/turbo-eth/template-bank-app',
    name: '🏦 Bank - Web3 Savings Network Template',
    description: 'Web3 Savings Cards using PoolTogether, ERC721K and Solbase',
    url: 'https://bank.turboeth.xyz/',
  },
  places: {
    git: 'https://github.com/kamescg/places',
    name: '🗺️ Places - Digital Collectible App Template',
    description: 'Places uses the TurboETH and Solbase for a simple and gas optimized digital collectable application you can spin up minutes.',
    url: 'https://places.kames.me/',
  },
  'turbo-slides': {
    git: 'https://github.com/turbo-eth/turbo-slides',
    name: '📖 Turbo Slides',
    description: 'Create presentation decks using MDX, React, and Next.js with Web3 capabilities.',
    url: 'https://slides.turboeth.xyz/',
  },
}
