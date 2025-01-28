import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const credits = [
  {
    id: 1,
    type: "ACCU",
    amount: 500,
    value: "$12,500",
    status: "Available",
  },
  {
    id: 2,
    type: "VCU",
    amount: 300,
    value: "$7,500",
    status: "Locked",
  },
  {
    id: 3,
    type: "ACCU",
    amount: 200,
    value: "$5,000",
    status: "Pending",
  },
]

export function CreditBalance() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {credits.map((credit) => (
          <TableRow key={credit.id}>
            <TableCell className="font-medium">{credit.type}</TableCell>
            <TableCell>{credit.amount}</TableCell>
            <TableCell>{credit.value}</TableCell>
            <TableCell>{credit.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

