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
    <div className="relative mx-auto flex min-h-min w-full max-w-7xl items-center px-4">
      <div className="relative mx-auto mt-10 inline-flex w-full overflow-hidden rounded-full p-[1px] md:mt-0 md:max-w-md">
        <div className="flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-2 rounded-full border-2 border-[#1c1c1e] bg-[#101012] px-10 py-4 text-sm font-medium text-secondary-foreground backdrop-blur-3xl dark:text-secondary-foreground/60 md:space-x-6">
          <h6 className="font-heading text-lg tracking-wide md:text-xl">
            Hey There Aliens!
          </h6>
          <span className="hidden h-full cursor-pointer items-center justify-center rounded-full border border-[#101012] bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 px-4 py-2 text-sm font-bold text-secondary-foreground backdrop-blur-3xl hover:bg-gradient-to-br dark:text-secondary-foreground/60 md:inline-flex">
            Check Our Courses
          </span>
          <span className="inline-flex h-full cursor-pointer items-center justify-center rounded-full border border-border bg-[#101012] px-4 py-2 text-sm font-bold text-secondary-foreground backdrop-blur-3xl dark:text-secondary-foreground/60 md:hidden">
            Courses
          </span>
        </div>
      </div>
      {/* <div className="absolute -top-5 right-10 md:top-1/2 md:-translate-y-1/2">
        <ModeToggle />
      </div>
      <div className="absolute -top-5 left-10 md:top-1/2 md:-translate-y-1/2">
        <button className="animate-background-shine inline-flex items-center justify-center rounded-full border-4 border-emerald-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 font-heading text-xl font-bold text-slate-100 transition-colors focus:outline-none">
          T
        </button>
      </div> */}
    </div>
  )
}
