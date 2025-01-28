"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AITradeMonitor } from "@/components/dashboard/ai-trade-monitor"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function TradingPage() {
  const [orderType, setOrderType] = useState("buy")
  const [creditType, setCreditType] = useState("ACCU")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating blockchain transaction
    try {
      // In a real application, this would be a call to a blockchain network
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Order Submitted",
        description: `Your ${orderType} order for ${amount} ${creditType} credits at $${price} has been recorded on the blockchain.`,
      })

      setAmount("")
      setPrice("")
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "There was an error submitting your order to the blockchain. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const marketOrders = [
    { id: 1, type: "Sell", creditType: "ACCU", amount: 500, price: 25, blockchainId: "0x1234...5678" },
    { id: 2, type: "Buy", creditType: "VCU", amount: 300, price: 22, blockchainId: "0xabcd...efgh" },
    { id: 3, type: "Sell", creditType: "ACCU", amount: 1000, price: 26, blockchainId: "0x9876...5432" },
    { id: 4, type: "Buy", creditType: "ACCU", amount: 200, price: 24, blockchainId: "0xijkl...mnop" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Trading</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Place Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderType">Order Type</Label>
                <Select value={orderType} onValueChange={setOrderType}>
                  <SelectTrigger id="orderType">
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="creditType">Credit Type</Label>
                <Select value={creditType} onValueChange={setCreditType}>
                  <SelectTrigger id="creditType">
                    <SelectValue placeholder="Select credit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACCU">ACCU</SelectItem>
                    <SelectItem value="VCU">VCU</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price per Credit</Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting to Blockchain...
                  </>
                ) : (
                  "Place Order"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <AITradeMonitor />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Market Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Credit</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Blockchain ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>{order.creditType}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>${order.price}</TableCell>
                  <TableCell className="font-mono text-xs">{order.blockchainId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

