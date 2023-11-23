import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontHeading, fontMono, fontSans } from "@/lib/fonts"

import "@/styles/globals.css"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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
          "min-h-screen bg-foreground font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
            <div className="container hidden h-20 items-center justify-between py-6  md:flex">
              <MainNav />
              <nav>
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Courses
                </Link>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
