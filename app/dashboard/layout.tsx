"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardNav } from "@/components/dashboard/nav"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  const getBreadcrumbItems = (pathname: string) => {
    const paths = pathname.split('/').filter(Boolean)
    return paths.slice(1).map((path, index) => {
      const href = `/${paths.slice(0, index + 2).join('/')}`
      const label = path.charAt(0).toUpperCase() + path.slice(1)
      return { href, label }
    })
  }

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardNav />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {getBreadcrumbItems(router.pathname).map((item, index) => (
                <BreadcrumbItem key={item.href}>
                  {index < getBreadcrumbItems(router.pathname).length - 1 ? (
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          {children}
        </main>
      </div>
    </div>
  )
}

