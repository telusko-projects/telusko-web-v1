"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MotionA, MotionDiv } from "@/components/framer-motion-client"

import { Particles } from "./particles"

export function HeroBanner() {
  const { theme } = useTheme()
  return (
    <div className="relative isolate mt-28">
      <div className="relative z-0 mx-auto flex max-w-7xl justify-center rounded-2xl border border-[#1c1c1e] bg-[#101012] px-4 pb-24 pt-10 text-center shadow-inner shadow-[#1c1c1e] sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <Particles
          className="absolute inset-0 -z-10 opacity-40 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
          quantity={(3 + 1) ** 2 * 10}
          color="#34d399"
          vy={-0.2}
        />
        <section className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 text-start md:text-center lg:text-start">
            <MotionDiv
              className="relative flex items-center justify-start gap-4 md:justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="animate-background-shine inline-flex items-center justify-center rounded-full border-4 border-emerald-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 font-heading text-xl font-bold text-slate-100 transition-colors focus:outline-none">
                T
              </button>
              <h6 className="font-heading text-xl font-bold tracking-wide text-secondary-foreground dark:text-secondary-foreground/60">
                Telusko.com
              </h6>
            </MotionDiv>
            <MotionDiv
              className="relative max-w-3xl lg:max-w-4xl"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="py-4 font-heading text-4xl font-semibold leading-[1.1] tracking-wide text-secondary-foreground dark:text-secondary-foreground/60 md:text-5xl">
                Elevate Your Skills: Java Mastery Starts Here!
              </h1>
            </MotionDiv>
            <MotionDiv
              className="relative mx-auto w-full md:max-w-xl lg:mx-0"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-start text-lg text-secondary-foreground/60 dark:text-secondary-foreground/40">
                Embark on a coding adventure with our Java courses. Master the
                language, build projects, and transform your future with
                hands-on learning and expert guidance.
              </p>
            </MotionDiv>
            <MotionDiv
              className="relative mt-4 flex flex-col gap-4 md:flex-row md:justify-center lg:justify-start"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              <Button className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-base font-bold text-secondary-foreground/60 hover:bg-gradient-to-br">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mx-auto flex min-h-min max-w-sm items-center justify-center transition"
          >
            <div className="relative mt-32 h-full w-full rounded-md border-2 border-border p-3 pb-0 dark:border-secondary-foreground/60 lg:mt-0">
              <span className="absolute -right-0 -top-36 md:-right-32">
                <Image
                  src={"/work-scribble.svg"}
                  height={131}
                  width={249}
                  alt="Work Scribble"
                  className="h-full w-full"
                />
              </span>
              <Image
                src={"/navin.png"}
                height={220}
                width={240}
                alt="Navin Reddy"
                className="h-full w-full rounded-md object-contain"
              />
            </div>
          </MotionDiv>
        </section>
      </div>
    </div>
  )
}
