import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type BlockchainTransactionProps = {
  transactionId: string
  from: string
  to: string
  amount: number
  creditType: string
  timestamp: string
  blockNumber: number
  gasUsed: number
}

export function BlockchainTransaction({ transaction }: { transaction: BlockchainTransactionProps }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blockchain Transaction Details</CardTitle>
        <CardDescription>Verified on-chain information</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="w-[200px]">Transaction ID</TableHead>
              <TableCell className="font-mono">{transaction.transactionId}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>From</TableHead>
              <TableCell className="font-mono">{transaction.from}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>To</TableHead>
              <TableCell className="font-mono">{transaction.to}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Amount</TableHead>
              <TableCell>
                {transaction.amount} {transaction.creditType}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableCell>{new Date(transaction.timestamp).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Block Number</TableHead>
              <TableCell>{transaction.blockNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Gas Used</TableHead>
              <TableCell>{transaction.gasUsed}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

