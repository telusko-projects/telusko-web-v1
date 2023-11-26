import React from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export const CourseCard = () => {
  return (
    <div className="mt-10 flex flex-col rounded-lg border border-secondary-foreground/20 p-6 shadow-inner">
      {/* Instructors */}
      <div>
        <div
          aria-label="Instructors"
          className="inline-flex h-14 w-14 scale-100 items-center justify-center rounded-full focus:outline-none"
        >
          <div
            className="animate-spin-slow absolute p-2"
            // style={{ transform: "rotate(-43.947deg) translateZ(0px)" }}
          >
            <svg height="56" width="56" viewBox="0 0 56 56">
              <path
                d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
                className="text-yellow-600"
                fill="currentColor"
              ></path>
              <path
                d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
                className="text-blue-600"
                fill="currentColor"
              ></path>
              <path
                d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
                className="text-red-600"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {/* <img
            className="inline w-10 select-none rounded-full"
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_profile_gray"
            alt="Kody Profile in Gray"
            crossOrigin="anonymous"
          /> */}
          <Image
            src="/navin.png"
            height={60}
            width={60}
            alt="Navin Reddy"
            className="inline-block w-10 select-none rounded-full object-fill"
          />
        </div>
      </div>
      {/* Title */}
      <div>
        <h2 className="mt-4 font-heading text-2xl font-bold tracking-normal text-secondary-foreground/60 sm:text-3xl">
          Advanced Java with SpringBoot - Live Course
        </h2>
        <p className="mt-4 text-lg leading-8 text-secondary-foreground/40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nostrum
          veniam earum qui aperiam tempore dolore ipsa nobis deleniti quos!
        </p>
        <ul className="mt-6 space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <li
              key={i}
              className="inline-flex items-center text-secondary-foreground/60"
            >
              <Check className="mr-3 h-6 w-6 text-emerald-700" />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button className="inline-flex w-max items-center bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-base font-bold text-secondary-foreground/60 hover:bg-gradient-to-br">
            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
