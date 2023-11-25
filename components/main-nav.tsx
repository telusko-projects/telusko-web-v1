"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"

import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

// Sticky Navbar

export function MainNav() {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <div className="container relative flex min-h-min w-full items-center px-4">
      <div className="relative mx-auto mt-10 inline-flex w-full overflow-hidden rounded-full p-[1px] md:mt-0 md:max-w-md">
        <span className="absolute inset-[-1000%] bg-border dark:animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-2 rounded-full bg-background px-10 py-4 text-sm font-medium text-secondary-foreground backdrop-blur-3xl dark:text-secondary-foreground/60 md:space-x-6">
          <h6 className="font-heading text-lg tracking-wide md:text-xl">
            Hey There Aliens!
          </h6>
          <span className="hidden h-full cursor-pointer items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-bold text-secondary-foreground backdrop-blur-3xl dark:text-secondary-foreground/60 md:inline-flex">
            Check Our Courses
          </span>
          <span className="inline-flex h-full cursor-pointer items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-bold text-secondary-foreground backdrop-blur-3xl dark:text-secondary-foreground/60 md:hidden">
            Courses
          </span>
        </div>
      </div>
      <div className="absolute -top-5 right-10 md:top-1/2 md:-translate-y-1/2">
        <ModeToggle />
      </div>
    </div>
  )
}
