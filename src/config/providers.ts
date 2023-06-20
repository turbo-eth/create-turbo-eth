export const providers = {
  alchemy: {
    value: 'alchemy',
    name: 'Alchemy',
    env: 'NEXT_PUBLIC_ALCHEMY_API_KEY',

  },
  infura: {
    value: 'infura',
    name: 'Infura',
    env: 'NEXT_PUBLIC_INFURA_API_KEY',
  },
  public: {
    value: 'public',
    name: 'Public RPC',
    env: null,
  },
}
