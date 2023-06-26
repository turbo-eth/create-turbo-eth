'use client'

import { motion } from 'framer-motion'

import { PoolTogetherFormDeposit } from '@/actions/pooltogether-v4/components/form-yield-source-prize-pool-deposit'
import { WalletConnect } from '@/components/blockchain/wallet-connect'
import { IsWalletConnected } from '@/components/shared/is-wallet-connected'
import { IsWalletDisconnected } from '@/components/shared/is-wallet-disconnected'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/config/design'

export default function PoolTogetherDeposit() {
  return (
    <>
      <motion.div
        animate="show"
        className="flex h-full w-full"
        initial="hidden"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        viewport={{ once: true }}
        whileInView="show">
        <IsWalletConnected>
          <PoolTogetherFormDeposit />
        </IsWalletConnected>
        <IsWalletDisconnected>
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-3 text-lg font-normal">Connect your wallet to deposit on PoolTogether.</h3>
            <WalletConnect />
          </div>
        </IsWalletDisconnected>
      </motion.div>
    </>
  )
}