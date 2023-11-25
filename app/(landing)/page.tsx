

import { CourseCards } from "./_components/courses"
import { HeroBanner } from "./_components/hero-banner"
import { UdemyCourseCard } from "./_components/udemy-course-card"

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <hr className="mb-14 " />
      <CourseCards />
      <UdemyCourseCard />
    </section>
  )
}
