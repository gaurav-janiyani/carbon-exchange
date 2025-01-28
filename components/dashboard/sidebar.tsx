"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Leaf,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  Brain,
  LinkIcon,
  Activity,
  Gift,
  Store,
} from "lucide-react"

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart,
  },
  {
    title: "My Projects",
    href: "/dashboard/projects",
    icon: Leaf,
  },
  {
    title: "Project Tracker",
    href: "/dashboard/project-tracker",
    icon: Activity,
  },
  {
    title: "Marketplace",
    href: "/dashboard/marketplace",
    icon: Store,
  },
  {
    title: "Trading",
    href: "/dashboard/trading",
    icon: ShoppingCart,
  },
  {
    title: "Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    title: "My Rewards",
    href: "/dashboard/rewards",
    icon: Gift,
  },
  {
    title: "AI Analytics",
    href: "/dashboard/ai-analytics",
    icon: Brain,
  },
  {
    title: "Community",
    href: "/dashboard/community",
    icon: Users,
  },
  {
    title: "Blockchain Explorer",
    href: "/blockchain-explorer",
    icon: LinkIcon,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {sidebarNavItems.map((item) => {
        const Icon = item.icon
        return (
          <Link key={item.href} href={item.href}>
            <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}

