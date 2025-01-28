"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Moon, Sun, Menu, Home, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WalletConnect } from "@/components/wallet/wallet-connect"

export function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects-marketplace", label: "Projects & Marketplace" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/resources", label: "Resources" },
    { href: "/community", label: "Community" },
  ]

  const moreNavItems = [
    { href: "/impact", label: "Impact" },
    { href: "/education", label: "Education" },
    { href: "/blockchain-explorer", label: "Blockchain Explorer" },
    { href: "/contact", label: "Contact" },
  ]

  const user = true // Replace with actual user authentication logic
  const logout = () => {
    // Add your logout logic here
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-4">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl hidden sm:inline">ICXP</span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === item.href}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {moreNavItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px]" />
          </div>
          <WalletConnect />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {[...mainNavItems, ...moreNavItems].map((item) => (
                  <Link key={item.href} href={item.href} className="text-lg font-medium hover:underline">
                    {item.label}
                  </Link>
                ))}
                {user ? (
                  <Button onClick={logout} variant="ghost">
                    Log Out
                  </Button>
                ) : (
                  <Link href="/login" className="text-lg font-medium hover:underline">
                    Log In
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

