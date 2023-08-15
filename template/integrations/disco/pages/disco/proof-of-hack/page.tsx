'use client'

import { WalletConnect } from '@/components/blockchain/wallet-connect'
import { IsWalletConnected } from '@/components/shared/is-wallet-connected'
import { IsWalletDisconnected } from '@/components/shared/is-wallet-disconnected'
import { FormCredentialIssuanceProofOfHack } from '@/integrations/disco/components/form-issue-proof-of-hack'
import { ButtonSpruceKitLogin } from '@/integrations/sprucekit/components/button-sprucekit-login'
import { IsSignedIn } from '@/integrations/sprucekit/components/is-signed-in'
import { IsSignedOut } from '@/integrations/sprucekit/components/is-signed-out'

export default function PageIntegration() {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col justify-center px-5">
      <IsWalletConnected>
        <IsSignedIn>
          <FormCredentialIssuanceProofOfHack />
        </IsSignedIn>
        <IsSignedOut>
          <div className="text-center">
            <ButtonSpruceKitLogin className="btn btn-emerald" label="Sign-In With Ethereum" />
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-200">
              Accessing the Disco API requires authenticating with an Ethereum Account.
            </p>
          </div>
        </IsSignedOut>
      </IsWalletConnected>
      <IsWalletDisconnected>
        <WalletConnect className="mx-auto inline-block" />
      </IsWalletDisconnected>
    </div>
  )
}
