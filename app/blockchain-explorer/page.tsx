"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, Hash, ArrowRightLeft } from "lucide-react"

const mockData = {
  recentTransactions: [
    {
      hash: "0x1234...5678",
      from: "0xabcd...ef01",
      to: "0x2345...6789",
      amount: 100,
      timestamp: "2023-06-15 14:30:45",
    },
    { hash: "0x5678...9abc", from: "0x3456...7890", to: "0xcdef...0123", amount: 50, timestamp: "2023-06-15 14:29:30" },
    { hash: "0x9abc...def0", from: "0x4567...8901", to: "0xef01...2345", amount: 75, timestamp: "2023-06-15 14:28:15" },
  ],
  blocks: [
    { number: 1000001, hash: "0xffff...0000", transactions: 150, timestamp: "2023-06-15 14:30:00" },
    { number: 1000000, hash: "0xeeee...1111", transactions: 120, timestamp: "2023-06-15 14:29:00" },
    { number: 999999, hash: "0xdddd...2222", transactions: 180, timestamp: "2023-06-15 14:28:00" },
  ],
}

export default function BlockchainExplorer() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    // Implement blockchain search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Blockchain Explorer</h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex space-x-2">
            <Input
              placeholder="Search by transaction hash, block number, or address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="transactions" className="space-y-8">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="blocks">Latest Blocks</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest carbon credit transactions on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction Hash</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.recentTransactions.map((tx) => (
                    <TableRow key={tx.hash}>
                      <TableCell className="font-mono">{tx.hash}</TableCell>
                      <TableCell className="font-mono">{tx.from}</TableCell>
                      <TableCell className="font-mono">{tx.to}</TableCell>
                      <TableCell>{tx.amount} credits</TableCell>
                      <TableCell>{tx.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blocks">
          <Card>
            <CardHeader>
              <CardTitle>Latest Blocks</CardTitle>
              <CardDescription>Most recent blocks added to the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Block Number</TableHead>
                    <TableHead>Block Hash</TableHead>
                    <TableHead>Transactions</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.blocks.map((block) => (
                    <TableRow key={block.number}>
                      <TableCell>{block.number}</TableCell>
                      <TableCell className="font-mono">{block.hash}</TableCell>
                      <TableCell>{block.transactions}</TableCell>
                      <TableCell>{block.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Blockchain Statistics</CardTitle>
          <CardDescription>Key metrics of the ICXP blockchain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>Average Block Time: 15 seconds</span>
            </div>
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4 text-muted-foreground" />
              <span>Total Blocks: 1,000,001</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRightLeft className="w-4 h-4 text-muted-foreground" />
              <span>Total Transactions: 15,000,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

