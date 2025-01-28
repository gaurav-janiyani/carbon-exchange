import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, ArrowRightLeft, Store, Leaf, BarChart } from "lucide-react"
import Link from "next/link"

export function QuickAccess() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4">
          <Button asChild className="flex-1 min-w-[120px]">
            <Link href="/dashboard/projects/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">New Project</span>
              <span className="sm:hidden">New</span>
            </Link>
          </Button>
          <Button asChild variant="secondary" className="flex-1 min-w-[120px]">
            <Link href="/dashboard/trading">
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Trade Credits</span>
              <span className="sm:hidden">Trade</span>
            </Link>
          </Button>
          <Button asChild variant="secondary" className="flex-1 min-w-[120px]">
            <Link href="/dashboard/marketplace">
              <Store className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Marketplace</span>
              <span className="sm:hidden">Market</span>
            </Link>
          </Button>
          <Button asChild variant="secondary" className="flex-1 min-w-[120px]">
            <Link href="/dashboard/analytics">
              <BarChart className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
              <span className="sm:hidden">Stats</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 min-w-[120px]">
            <Link href="/resources">
              <Leaf className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Learn More</span>
              <span className="sm:hidden">Learn</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

