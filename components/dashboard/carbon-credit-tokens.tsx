"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

type CarbonCreditToken = {
  id: string
  amount: number
  projectName: string
  expirationDate: string
}

export function CarbonCreditTokens() {
  const [tokens, setTokens] = useState<CarbonCreditToken[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [transferAmount, setTransferAmount] = useState("")
  const [transferAddress, setTransferAddress] = useState("")

  useEffect(() => {
    // Simulating API call to fetch tokens
    setTimeout(() => {
      setTokens([
        { id: "ICXP-001", amount: 100, projectName: "Amazon Reforestation", expirationDate: "2025-12-31" },
        { id: "ICXP-002", amount: 50, projectName: "Solar Farm Initiative", expirationDate: "2026-06-30" },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleTransfer = async (tokenId: string) => {
    setIsLoading(true)
    // Simulating token transfer
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setTokens((prevTokens) =>
      prevTokens.map((token) =>
        token.id === tokenId ? { ...token, amount: token.amount - Number(transferAmount) } : token
      )
    )
    setTransferAmount("")
    setTransferAddress("")
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Carbon Credit Tokens</CardTitle>
          <CardDescription>Manage your carbon credit tokens</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carbon Credit Tokens</CardTitle>
        <CardDescription>Manage your carbon credit tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tokens.map((token) => (
            <Card key={token.id}>
              <CardHeader>
                <CardTitle>{token.projectName}</CardTitle>
                <CardDescription>Token ID: {token.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span>Amount: {token.amount} tCO2e</span>
                  <span>Expires: {token.expirationDate}</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`transfer-amount-${token.id}`}>Transfer Amount</Label>
                  <Input
                    id={`transfer-amount-${token.id}`}
                    type="number"
                    placeholder="Amount to transfer"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                  <Label htmlFor={`transfer-address-${token.id}`}>Recipient Address</Label>
                  <Input
                    id={`transfer-address-${token.id}`}
                    type="text"
                    placeholder="Recipient's wallet address"
                    value={transferAddress}
                    onChange={(e) => setTransferAddress(e.target.value)}
                  />
                  <Button
                    onClick={() => handleTransfer(token.id)}
                    disabled={!transferAmount || !transferAddress || Number(transferAmount) > token.amount}
                    className="w-full sm:w-auto"
                  >
                    Transfer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

