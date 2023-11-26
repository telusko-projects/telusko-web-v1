import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

import { CourseCard } from "./course-card"
import { Particles } from "./particles"

const posts = [
  {
    id: 1,
    title: "Advance Java with SpringBoot",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Java", href: "#" },
    author: {
      name: "Navin Reddy",
      role: "Founder - Telusko.com",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Complete Java Developer Course",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Java + SpringBoot", href: "#" },
    author: {
      name: "Navin Reddy",
      role: "Founder - Telusko.com",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
]

export function CourseCards() {
  return (
    <div className="relative mx-auto my-28 max-w-7xl rounded-2xl border border-[#1c1c1e] bg-[#101012] px-4 pb-24 pt-10 shadow-inner shadow-[#1c1c1e]">
      <Particles
        className="absolute inset-0 z-10 opacity-40 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
        quantity={(2 + 1) ** 2 * 10}
        color="#34d399"
        vy={-0.2}
      />
      <div className="px-6 lg:px-8">
        <div className="">
          <h2 className="font-heading text-3xl font-bold tracking-normal text-secondary-foreground/60 sm:text-4xl">
            Our Courses
          </h2>
          <p className="mt-2 text-lg leading-8 text-secondary-foreground/40">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}
