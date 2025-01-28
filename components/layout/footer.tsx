import Link from "next/link"
import { siteConfig } from "@/lib/config/site"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { href: "/projects-marketplace", label: "Projects & Marketplace" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/impact", label: "Impact" },
      { href: "/blockchain-explorer", label: "Blockchain Explorer" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Guides" },
      { href: "/education", label: "Education" },
      { href: "/faq", label: "FAQ" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative z-10 bg-transparent border-t border-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

