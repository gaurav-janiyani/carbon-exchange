export type NavItem = {
  title: string
  href: string
  description?: string
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  mainNav: MainNavItem[]
  links: {
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ICXP",
  description:
    "Inclusive Carbon Exchange Platform - Empowering small players in Australia's carbon credit market through technology and transparency",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Marketplace",
      href: "/marketplace",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/icxp",
    docs: "/docs",
  },
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: MainNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/documentation",
    },
    {
      title: "Support",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "Overview",
      href: "/dashboard",
    },
    {
      title: "My Projects",
      href: "/dashboard/projects",
    },
    {
      title: "Trading",
      href: "/dashboard/trading",
    },
    {
      title: "Wallet",
      href: "/dashboard/wallet",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      title: "Education",
      href: "/dashboard/education",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ],
}

