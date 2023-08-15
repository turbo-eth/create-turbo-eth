import { siteConfig } from '@/config/site';
import { SSXProvider } from '@spruceid/ssx-react';
import { useWalletClient } from 'wagmi';

const ssxConfig = {
  providers: {
    server: {
      host: `${window.location.origin}/api/ssx`,
      routes: {
        logout: {
          method: 'get'
        }
      }
    }
  },
  siweConfig: {
    statement: `Sign in with Ethereum to ${siteConfig.name}`,
    uri: window.location.origin
  }
};

export function SpruceKitProvider({ children }: any) {
  const { data: walletClient } = useWalletClient();

  const web3Provider = {
    provider: walletClient,
  };

  return (
    <SSXProvider
      ssxConfig={ssxConfig}
      web3Provider={web3Provider}
    >
      {children}
    </SSXProvider>
  );
}