import { Particles } from "./particles"

export function Testimonial() {
  return (
    <div className="relative mx-auto my-24 max-w-7xl rounded-2xl border border-[#1c1c1e] bg-[#101012] px-4 pb-24 pt-10 shadow-inner shadow-[#1c1c1e]">
      <Particles
        className="absolute inset-0 z-10 opacity-40 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
        quantity={(2 + 1) ** 2 * 10}
        color="#34d399"
        vy={-0.2}
      />
      <div className="px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-normal text-secondary-foreground/60 sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-2 text-lg leading-8 text-secondary-foreground/40">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="pointer-events-none relative mt-8 flex gap-8 overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center justify-around gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="pt-8 sm:inline-block sm:px-4">
              <figure className="w-[300px] rounded-2xl border border-secondary-foreground/40 p-8 text-sm leading-6">
                <blockquote className="text-secondary-foreground/60">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed odio voluptate in repudiandae veritatis error?
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full border border-secondary-foreground/40"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-secondary-foreground/60">
                      Navin Reddy
                    </div>
                    <div className="text-secondary-foreground/40">{`@navinreddy`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center justify-around gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="pt-8 sm:inline-block sm:px-4">
              <figure className="w-[300px] rounded-2xl border border-secondary-foreground/40 p-8 text-sm leading-6">
                <blockquote className="text-secondary-foreground/60">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed odio voluptate in repudiandae veritatis error?
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full border border-secondary-foreground/40"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-secondary-foreground/60">
                      Navin Reddy
                    </div>
                    <div className="text-secondary-foreground/40">{`@navinreddy`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none relative mt-10 flex gap-8 overflow-hidden">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 [animation-direction:reverse]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="pt-8 sm:inline-block sm:px-4">
              <figure className="w-[300px] rounded-2xl border border-secondary-foreground/40 p-8 text-sm leading-6">
                <blockquote className="text-secondary-foreground/60">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed odio voluptate in repudiandae veritatis error?
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full border border-secondary-foreground/40"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-secondary-foreground/60">
                      Navin Reddy
                    </div>
                    <div className="text-secondary-foreground/40">{`@navinreddy`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 [animation-direction:reverse]"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="pt-8 sm:inline-block sm:px-4">
              <figure className="w-[300px] rounded-2xl border border-secondary-foreground/40 p-8 text-sm leading-6">
                <blockquote className="text-secondary-foreground/60">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed odio voluptate in repudiandae veritatis error?
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full border border-secondary-foreground/40"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-secondary-foreground/60">
                      Navin Reddy
                    </div>
                    <div className="text-secondary-foreground/40">{`@navinreddy`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
