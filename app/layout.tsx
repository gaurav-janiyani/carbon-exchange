import "@/styles/globals.css"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { SkipToContent } from "@/components/layout/skip-to-content"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StarryBackground } from "@/components/starry-background"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} ${jetbrainsMono.className} font-sans bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            <div className="relative min-h-screen overflow-hidden">
              <StarryBackground />
              <div className="relative z-10">
                <SkipToContent />
                <Header />
                <main id="main-content" className="min-h-screen">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'