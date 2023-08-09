import { siteConfig } from '@/config/site';
import { SSXProvider } from '@spruceid/ssx-react';
import { useWalletClient } from 'wagmi';

export function SpruceKitProvider({ children }: any) {
  const { data: walletClient } = useWalletClient();

  const web3Provider = {
    provider: walletClient,
  };

  return (
    <SSXProvider
      ssxConfig={{
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
      }}
      web3Provider={web3Provider}
    >
      {children}
    </SSXProvider>
  );
}