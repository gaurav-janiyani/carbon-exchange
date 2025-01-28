"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WalletPage() {
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the deposit logic
    console.log("Deposit:", depositAmount)
  }

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the withdrawal logic
    console.log("Withdraw:", withdrawAmount)
  }

  const transactions = [
    { id: 1, type: "Deposit", amount: 1000, date: "2024-01-22" },
    { id: 2, type: "Withdrawal", amount: 500, date: "2024-01-20" },
    { id: 3, type: "Purchase", amount: 750, date: "2024-01-18" },
    { id: 4, type: "Sale", amount: 1200, date: "2024-01-15" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Wallet</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
            <CardDescription>Your current wallet balance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$5,750.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Deposit / Withdraw</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleDeposit}>
              <div className="flex space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="deposit">Deposit Amount</Label>
                  <Input
                    id="deposit"
                    placeholder="Enter amount"
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                </div>
                <Button type="submit" className="self-end">
                  Deposit
                </Button>
              </div>
            </form>
            <form onSubmit={handleWithdraw}>
              <div className="flex space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="withdraw">Withdraw Amount</Label>
                  <Input
                    id="withdraw"
                    placeholder="Enter amount"
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                </div>
                <Button type="submit" variant="outline" className="self-end">
                  Withdraw
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

