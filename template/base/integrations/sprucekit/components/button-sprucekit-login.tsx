'use client'

import { HTMLAttributes, useState } from 'react'

import { useAccount, useNetwork } from 'wagmi'
import { useSSX } from '@spruceid/ssx-react';

import { spruceKitLogin } from '@/integrations/sprucekit/actions/sprucekit-login'
import { useUser } from '@/lib/hooks/use-user'
import { cn } from '@/lib/utils'

interface ButtonSpruceKitLoginProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string
  disabled?: boolean
}
export const ButtonSpruceKitLogin = ({ className, label = 'Sign-In With Ethereum', disabled, children, ...props }: ButtonSpruceKitLoginProps) => {
  const { mutateUser } = useUser()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { ssx } = useSSX()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCreateMessage = async () => {
    setIsLoading(true)
    try {
      if (!address || !chain?.id) return
      const { siwe, signature } = await ssx.signIn()
      await spruceKitLogin({ message: siwe, signature })
      await mutateUser()
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }
  const classes = cn('relative', className)
  const labelClasses = cn({
    'opacity-0': isLoading,
  })

  return (
    <button className={classes} disabled={disabled} type="button" onClick={handleCreateMessage} {...props}>
      {isLoading && <span className="lds-dual-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
      <span className={labelClasses}>{children || label || 'Logout'}</span>
    </button>
  )
}
