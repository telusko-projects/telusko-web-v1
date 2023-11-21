import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/telusko.png"
          height={20}
          width={80}
          alt={siteConfig.name}
        />
        <span className="sr-only inline-block font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
