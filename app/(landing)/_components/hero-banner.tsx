import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MotionA, MotionDiv } from "@/components/framer-motion-client"

export function HeroBanner() {
  return (
    <div className="relative isolate my-20 overflow-hidden bg-background">
      <div className="mx-auto flex max-w-7xl justify-center px-6 pb-24 pt-10 text-center sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <section className="relative md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-4 text-start">
            <MotionDiv
              className="flex h-[45px] w-[90px] items-center space-x-4 rounded-lg transition"
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
              className="relative max-w-4xl"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="py-4 font-heading text-4xl font-semibold leading-[1.1] tracking-wide text-secondary-foreground dark:text-secondary-foreground/60 md:text-5xl">
                Elevate Your Skills: Java Mastery Starts Here!
              </h1>
            </MotionDiv>
            <MotionDiv
              className="relative max-w-xl"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg text-secondary-foreground/60 dark:text-secondary-foreground/40">
                Embark on a coding adventure with our Java courses. Master the
                language, build projects, and transform your future with
                hands-on learning and expert guidance.
              </p>
            </MotionDiv>
            <MotionDiv
              className="relative mt-4 flex flex-col gap-4 md:flex-row"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[2px] focus:outline-none">
                <span className="absolute inset-[-1000%] bg-primary dark:animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="text-md inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-secondary backdrop-blur-3xl dark:bg-background dark:text-secondary-foreground/60">
                  Enroll Now &rarr;
                </span>
              </button>
            </MotionDiv>
          </div>
          <div>Image</div>
        </section>
      </div>
    </div>
  )
}
