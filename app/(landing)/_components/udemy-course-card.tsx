import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Advance Java with SpringBoot",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
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
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
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
  {
    id: 3,
    title: "Complete Java Developer Course",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.",
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

export function UdemyCourseCard() {
  return (
    <div className="relative bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className=" inline-flex items-center space-x-3 font-heading text-3xl font-bold tracking-normal text-primary sm:text-4xl">
            <span><img src="udemy.svg" alt="udemy logo" className="h-12 w-auto" /></span>
            <span>Courses</span>
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="my-16 grid grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="w-full rounded shadow-lg">
              <img className="w-full" src={post.imageUrl} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="my-3 font-heading text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{post.title}</div>
              
                <ul className="mt-4 flex flex-col">
                      {Array.from({ length: 4 }).map((item, index) => (
                        <li key={index} className="mb-2 inline-flex items-center text-sm">
                          <CheckCircle className="mr-2 h-3 w-3 text-emerald-600" strokeWidth="3px"/>
                          Lorem ipsum dolor sit.
                        </li>
                      ))}
                    </ul>
                <div className="mt-4 flex border-t border-gray-900/5 pt-4">
                      <div className="relative flex items-center gap-x-4">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">Instructor</p>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="px-6 py-3">
                <Button className="w-full">Enroll Now</Button>
              </div>
              
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
