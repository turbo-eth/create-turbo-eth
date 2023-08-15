'use client'

import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Provider as RWBProvider } from 'react-wrap-balancer'

import HandleWalletEvents from '@/components/blockchain/handle-wallet-events'
import { RainbowKit } from '@/components/providers/rainbow-kit'
import { useIsMounted } from '@/lib/hooks/use-is-mounted'
import { SpruceKitProvider } from './spruce-kit'

const queryClient = new QueryClient()
interface RootProviderProps {
  children: ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted()
  return isMounted ? (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RWBProvider>
          <RainbowKit>
            <SpruceKitProvider>
              <HandleWalletEvents>{children}</HandleWalletEvents>
            </SpruceKitProvider>
          </RainbowKit>
        </RWBProvider>
      </QueryClientProvider>
    </ThemeProvider>
  ) : null
}
