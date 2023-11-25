import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontHeading, fontSans } from "@/lib/fonts"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-round.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-round.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#0D0D10] font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <header className="sticky top-10 z-40 w-full">
            <MainNav />
          </header>
          <div className="flex-1 px-4 lg:px-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
