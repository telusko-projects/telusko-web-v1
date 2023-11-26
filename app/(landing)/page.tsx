import { CourseCards } from "./_components/courses"
import { HeroBanner } from "./_components/hero-banner"
import { Testimonial } from "./_components/testimonials"
import { UdemyCourseCard } from "./_components/udemy-course-card"

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <CourseCards />
      <Testimonial />
      {/*
      <UdemyCourseCard /> */}
    </section>
  )
}
