'use client'

import { HTMLAttributes } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCopy } from 'react-icons/fa'
import { useAccount } from 'wagmi'

import { WalletAddress } from '@/components/blockchain/wallet-address'
import { WalletConnect } from '@/components/blockchain/wallet-connect'
import { ButtonSpruceKitLogin } from '@/integrations/sprucekit/components/button-sprucekit-login'
import { ButtonSpruceKitLogout } from '@/integrations/sprucekit/components/button-sprucekit-logout'
import { IsSignedIn } from '@/integrations/sprucekit/components/is-signed-in'
import { IsSignedOut } from '@/integrations/sprucekit/components/is-signed-out'
import { useToast } from '@/lib/hooks/use-toast'
import { cn } from '@/lib/utils'

import { IsWalletConnected } from '../shared/is-wallet-connected'
import { IsWalletDisconnected } from '../shared/is-wallet-disconnected'
import { ThemeToggle } from '../shared/theme-toggle'

export function DashboardHeader({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(className, 'px-6 lg:px-10 py-3 flex items-center w-full')
  const { address } = useAccount()
  const { toast, dismiss } = useToast()

  const handleToast = () => {
    toast({
      title: 'Addess Copied',
      description: 'Your address has been copied to your clipboard.',
    })

    setTimeout(() => {
      dismiss()
    }, 4200)
  }

  return (
    <header className={classes} {...props}>
      <div className="flex flex-1 ">
        <span className="flex items-center gap-2">
          <WalletAddress isLink truncate className="tag tag-primary hover:shadow-sm" />
          <span className="">
            <IsWalletConnected>
              <span className="" onClick={handleToast}>
                <CopyToClipboard text={address as string}>
                  <span className="flex-center flex h-7 w-7 cursor-pointer rounded-md bg-neutral-100 p-2 hover:bg-neutral-200 dark:bg-neutral-800 hover:dark:bg-neutral-900">
                    <FaCopy className=" text-neutral-600 dark:text-neutral-100" />
                  </span>
                </CopyToClipboard>
              </span>
            </IsWalletConnected>
          </span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <IsWalletConnected>
          <IsSignedIn>
            <ButtonSpruceKitLogout className="menu-item" />
          </IsSignedIn>
          <IsSignedOut>
            <ButtonSpruceKitLogin className=" menu-item colormode" />
          </IsSignedOut>
        </IsWalletConnected>
        <IsWalletDisconnected>
          <WalletConnect />
        </IsWalletDisconnected>
        <ThemeToggle />
      </div>
    </header>
  )
}
