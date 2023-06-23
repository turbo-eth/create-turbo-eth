![image](/public/readme.png)

# ⚡ create-turbo-eth - Web3 App Template CLI

Create-turbo-eth is an interactive CLI tool designed to jumpstart your full-stack web3 apps.

### Getting Started

To initialize an app using `create-turbo-eth`, execute one of the following commands and respond to the prompts. For performance reasons, we strongly recommend using pnpm.

#### pnpm

```bash
pnpm create turbo-eth@latest
```

#### npm

```bash
npm create turbo-eth@latest
```

#### yarn

```bash
yarn create turbo-eth
```

### Options

With `create-turbo-eth`, you can select from a range of integrations, providers, and networks to kickstart your project.

#### Integrations

Choose from the following integrations:

- [Sign-In with Ethereum](https://www.turboeth.xyz/integration/sign-in-with-ethereum): Authenticate with Ethereum accounts for Web3.
- [ERC20](https://www.turboeth.xyz/integration/erc20): Standard for fungible tokens on EVM chains.
- [ERC721](https://www.turboeth.xyz/integration/erc721): Standard for non-fungible tokens on EVM chains.
- [Disco](https://www.turboeth.xyz/integration/disco): A simplified identity tool to control information sharing.
- [Etherscan](https://www.turboeth.xyz/integration/etherscan): A leading block explorer, search, API & analytics platform for Ethereum.
- [Lit Protocol](https://www.turboeth.xyz/integration/lit-protocol/share): A solution for distributed key management for encryption, signing, and computing.
- [OpenAI](https://www.turboeth.xyz/integration/openai): AI models designed for advanced natural language processing.
- [PoolTogether V4](https://www.turboeth.xyz/integration/pooltogether-v4): A crypto-powered savings protocol based on Premium Bonds.

#### Providers

Select from the following providers:

- Alchemy
- Infura
- Public RPC

#### Networks

Choose from a range of production and testnet networks to match your project's needs.

#### Production Networks

- Ethereum Mainnet
- Optimism
- Arbitrum
- Polygon
- Celo

#### Testnet Networks

- Goerli
- Sepolia
- Optimism Goerli
- Arbitrum Goerli
- Polygon Mumbai
- Celo Alfajores
- Base Goerli

### Templates

In addition to the core TurboETH template, you can utilize the `create-turbo-eth` CLI to initiate more sophisticated templates, each focusing on specific functionalities. This can be achieved by appending the `--template` flag, followed by the name of your desired template:

- [template-disco-app](https://github.com/turbo-eth/template-disco-app): Networks 🪩 Disco App Template - A TurboETH template for building next generation identity applications powered by Disco.
- [template-tally-app](https://github.com/turbo-eth/template-tally-app): Council 🏛️ Tally App Template - A TurboETH template for building governance applications powered by Tally and OpenAI.
- [template-bank-app](https://github.com/turbo-eth/template-bank-app): 🏦 Bank - Web3 Savings Cards using PoolTogether, ERC721K and Solbase
- [places](https://github.com/kamescg/places): 🗺️ Places - Digital Collectible App Template
- [turbo-slides](https://github.com/turbo-eth/turbo-slides): 📖 Turbo Slides - Create presentation decks using MDX, React, and Next.js with Web3 capabilities.

### Flags

During CLI execution, you can use optional flags for further customization.

#### --skip-git

Skips git repository initialization.

#### --skip-install

Skips package installation

#### --pnpm

Uses pnpm as the package manager.

#### --npm

Uses npm as the package manager.

#### --yarn

Uses yarn as the package manager.

#### --template

Select a custom template to bootstrap from.

### Community

For assistance, feedback, or contributions, join us at:

[TurboETH Discord](https://discord.com/invite/uDg77HYh)
