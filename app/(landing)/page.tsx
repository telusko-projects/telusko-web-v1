import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MotionA, MotionDiv } from "@/components/framer-motion-client"

import { Example } from "./_components/courses"
import { HeroBanner } from "./_components/hero-banner"

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <hr className="mb-14" />
      <Example />
    </section>
  )
}
