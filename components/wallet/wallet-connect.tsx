"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type WalletProvider = {
  name: string
  icon: string
  description: string
}

const walletProviders: WalletProvider[] = [
  {
    name: "MetaMask",
    icon: "/metamask.svg",
    description: "Connect to your MetaMask wallet",
  },
  {
    name: "WalletConnect",
    icon: "/walletconnect.svg",
    description: "Connect using WalletConnect",
  },
  {
    name: "Coinbase Wallet",
    icon: "/coinbase.svg",
    description: "Connect to your Coinbase wallet",
  },
]

export function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [walletBalance, setWalletBalance] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async (providerName: string) => {
    setIsConnecting(true)
    setError(null)

    try {
      // Simulating wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, this would use ethers.js or web3.js
      const mockAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
      setWalletAddress(mockAddress)

      // Fetch wallet balance
      const mockBalance = "1.5 ETH"
      setWalletBalance(mockBalance)
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWalletAddress(null)
    setWalletBalance(null)
  }

  useEffect(() => {
    // Simulating balance updates
    if (walletAddress) {
      const interval = setInterval(() => {
        setWalletBalance((prev) => {
          const currentBalance = Number.parseFloat(prev!.split(" ")[0])
          const newBalance = (currentBalance + (Math.random() - 0.5) * 0.1).toFixed(2)
          return `${newBalance} ETH`
        })
      }, 10000)

      return () => clearInterval(interval)
    }
  }, [walletAddress])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{walletAddress ? "Wallet Connected" : "Connect Wallet"}</DialogTitle>
          <DialogDescription>
            {walletAddress
              ? "Your wallet is securely connected to ICXP"
              : "Choose your preferred wallet provider to connect to ICXP"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {walletAddress ? (
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 px-4 py-2 bg-secondary rounded-lg">
                <span className="font-mono text-sm">{walletAddress}</span>
                <span className="font-bold">{walletBalance}</span>
              </div>
              <Button onClick={disconnectWallet} variant="destructive" className="w-full">
                Disconnect Wallet
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              {walletProviders.map((provider) => (
                <Button
                  key={provider.name}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => connectWallet(provider.name)}
                  disabled={isConnecting}
                >
                  <img src={provider.icon || "/placeholder.svg"} alt={provider.name} className="mr-2 h-5 w-5" />
                  {provider.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

