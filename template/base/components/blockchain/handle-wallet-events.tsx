'use client'
import { ReactNode } from 'react'

import { useAccount } from 'wagmi'

import { spruceKitLogout } from '@/integrations/sprucekit/actions/sprucekit-logout'
import { useUser } from '@/lib/hooks/use-user'

interface HandleWalletEventsProps {
  children: ReactNode
}

export const HandleWalletEvents = ({ children }: HandleWalletEventsProps) => {
  const { mutateUser } = useUser()
  useAccount({
    async onDisconnect() {
      await spruceKitLogout()
      await mutateUser()
    },
  })
  return <>{children}</>
}

export default HandleWalletEvents
