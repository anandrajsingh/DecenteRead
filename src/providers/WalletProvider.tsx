'use client'

import { FC, ReactNode, useMemo } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export const WalletContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const network = WalletAdapterNetwork.Devnet;
    const endPoint = useMemo(() => "https://api.devnet.solana.com",[])
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
    console.log(network)

    return (
        <ConnectionProvider endpoint={endPoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}