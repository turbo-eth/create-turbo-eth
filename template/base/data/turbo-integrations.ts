export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations: Record<string, TurboIntegration> = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    category: "general",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
  },
  erc721: {
    name: "ERC721",
    href: "/integration/erc721",
    url: "https://eips.ethereum.org/EIPS/eip-721",
    description: "ERC721 is a standard for non-fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc721-icon.png",
    imgDark: "/integrations/erc721-icon.png",
  },
  erc1155: {
    name: "ERC1155",
    href: "/integration/erc1155",
    url: "https://eips.ethereum.org/EIPS/eip-1155",
    description: "ERC1155 is a multi-token standard on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc1155-icon.png",
    imgDark: "/integrations/erc1155-icon.png",
  },
  etherscan: {
    name: "Etherscan",
    href: "/integration/etherscan",
    url: "https://etherscan.io",
    description:
      "Etherscan is the leading block explorer and search, API & analytics platform for Ethereum.",
    category: "general",
    imgLight: "/integrations/etherscan-light.svg",
    imgDark: "/integrations/etherscan-dark.svg",
  },
  disco: {
    name: "Disco",
    href: "/integration/disco",
    url: "https://disco.xyz",
    description:
      "Disco is identity simplified. Giving the tools to consent to how information is shared and with whom.",
    category: "services",
    imgLight: "/integrations/discoLight.png",
    imgDark: "/integrations/discoDark.png",
  },
  sessionKeys: {
    name: "Session Keys",
    href: "/integration/session-keys",
    url: "https://viem.sh/",
    description:
      "Short-lived private keys enable transaction signing and the granting of temporary smart contract permissions.",
    category: "general",
    imgLight: "/integrations/session-keys.png",
    imgDark: "/integrations/session-keys.png",
  },
  litProtocol: {
    name: "Lit Protocol",
    href: "/integration/lit-protocol",
    url: "https://litprotocol.com/",
    description:
      "Lit is distributed key management for encryption, signing, and compute.",
    category: "services",
    imgLight: "/integrations/lit-protocol.png",
    imgDark: "/integrations/lit-protocol.png",
  },
  openai: {
    name: "OpenAI",
    href: "/integration/openai",
    url: "https://www.openai.com/",
    description:
      "OpenAI offers AI models designed for advanced natural language processing.",
    category: "general",
    imgLight: "/integrations/openai-light.svg",
    imgDark: "/integrations/openai-dark.svg",
  },
  pooltogether_v4: {
    name: "PoolTogether",
    href: "/integration/pooltogether-v4",
    url: "https://pooltogether.com/",
    description:
      "PoolTogether is a prize savings protocol, enable you to win by saving.",
    category: "protocols",
    imgLight: "/integrations/pooltogether.svg",
    imgDark: "/integrations/pooltogether.svg",
  },
  livepeer: {
    name: "Livepeer",
    href: "/integration/livepeer",
    url: "https://docs.livepeer.org/",
    description: "Livepeer is the world's open video infrastructure.",
    category: "protocols",
    imgLight: "/integrations/livepeer.svg",
    imgDark: "/integrations/livepeer.svg",
  },
  connext: {
    name: "Connext",
    href: "/integration/connext",
    url: "https://docs.connext.network/",
    description:
      "Connext is a modular protocol for securely passing funds and data between chains.",
    category: "protocols",
    imgLight: "/integrations/connext.png",
    imgDark: "/integrations/connext.png",
  },
  gelato: {
    name: "Gelato",
    href: "/integration/gelato",
    url: "https://docs.gelato.network/",
    description:
      "Enabling developers to create augmented smart contracts that are automated, gasless & off-chain aware",
    category: "protocols",
    imgLight: "/integrations/gelato-light.svg",
    imgDark: "/integrations/gelato-light.svg",
  },
  push_protocol: {
    name: "Push Protocol",
    href: "/integration/push-protocol",
    url: "https://push.org/",
    description:
      "Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.",
    category: "protocols",
    imgLight: "/integrations/push.svg",
    imgDark: "/integrations/push.svg",
  },
  moralis: {
    name: "Moralis",
    href: "/integration/moralis",
    url: "https://docs.moralis.io/",
    description:
      "Moralis provides a complete end-to-end blockchain application development platform.",
    category: "services",
    imgLight: "/integrations/moralis.png",
    imgDark: "/integrations/moralis.png",
  },
  aave: {
    name: "Aave",
    href: "/integration/aave",
    url: "https://docs.aave.com/hub/",
    description: "Aave is a decentralized non-custodial liquidity protocol.",
    category: "protocols",
    imgLight: "/integrations/aave.png",
    imgDark: "/integrations/aave.png",
  },
  arweave: {
    name: "Arweave",
    href: "/integration/arweave",
    url: "https://arwiki.arweave.dev",
    description:
      "Arweave is the first protocol that enables permanent data storage. Its design allows anyone to preserve data forever with just a single, one-time fee.",
    category: "protocols",
    imgLight: "/integrations/arweave-light.png",
    imgDark: "/integrations/arweave-dark.png",
  },
  lensProtocol: {
    name: "Lens Protocol",
    href: "/integration/lens-protocol",
    url: "https://www.lens.xyz/",
    description: "Lens Protocol is the social layer for Web3",
    category: "protocols",
    imgLight: "/integrations/lensprotocol-light.svg",
    imgDark: "/integrations/lensprotocol-dark.svg",
  },
  gitcoinPassport: {
    name: "Gitcoin Passport",
    href: "/integration/gitcoin-passport",
    url: "https://docs.passport.gitcoin.co/overview/introducing-gitcoin-passport",
    description:
      "Gitcoin Passport is an identity verification application. It enables you to collect verifiable credentials that prove your identity and trustworthiness without exposing personally identifying information.",
    category: "services",
    imgLight: "/integrations/gitcoin-passport.svg",
    imgDark: "/integrations/gitcoin-passport.svg",
  },
  starter: {
    name: "Starter Template",
    href: "/integration/starter",
    url: "https://docs.turboeth.xyz/overview",
    description:
      "Use this template to get started building integrations with TurboETH.",
    category: "general",
    imgLight: "/logo-gradient.png",
    imgDark: "/logo-gradient.png",
  },
}
