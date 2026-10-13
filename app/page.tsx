import Image from "next/image"
import {
  CalendarDays,
  Gift,
  HandHeart,
  Heart,
  Home,
  PawPrint,
  Shirt,
  Users,
} from "lucide-react"

import {
  ArrowLink,
  BrandStripe,
  FacebookIcon,
  InstagramIcon,
  LinkButton,
  Section,
  SectionHeading,
} from "@/components/site"
import { links } from "@/lib/site"
import beach from "@/public/beach.jpg"
import happyDog from "@/public/happy-dog.jpg"
import volunteers from "@/public/volunteers.jpg"

const waysToHelp = [
  {
    icon: Home,
    title: "Foster",
    body: "Fostering is a critical part of saving these dogs' lives. We'll match the right dog — size, age, temperament — to your home. It's free: we provide all the supplies. All we need from you is compassion.",
    cta: "Become a foster",
    href: "/foster",
  },
  {
    icon: Heart,
    title: "Adopt",
    body: "We rescue male and female dogs of all ages, sizes, and breeds. Tell us what you're looking for and we'll reach out when we think we have a good fit for you to meet.",
    cta: "Apply to adopt",
    href: "/adopt/apply",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Help us keep a steady schedule of people to walk, play with, and love our dogs — building their confidence and adoptability. Not comfortable handling dogs? There's plenty more to do at the shelter.",
    cta: "Volunteer with us",
    href: "/volunteer",
  },
]

const moreWays = [
  {
    icon: HandHeart,
    title: "Make a tax-deductible donation",
    body: "We depend entirely on kindhearted animal lovers making a tangible difference for the dogs of Monmouth County.",
    cta: "Ways to donate",
    href: "/donate",
  },
  {
    icon: Gift,
    title: "Give an honorary donation",
    body: "The perfect gift for someone who has everything. Donate, email us, and we'll send a printable note for the recipient.",
    cta: "How honorary gifts work",
    href: "/donate#honorary",
  },
  {
    icon: Shirt,
    title: "Wear the merch",
    body: "Shore Saves gear sparks conversations with fellow dog lovers — and spreads the word about our rescues.",
    cta: "Shop merch",
    href: "/shop",
  },
  {
    icon: CalendarDays,
    title: "Come to an event",
    body: "Meet the team and have some fun at our upcoming fundraising and adoption events.",
    cta: "View events",
    href: "/events",
  },
]

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm font-medium text-primary shadow-xs ring-1 ring-border">
              <PawPrint className="size-4" />
              Freehold, New Jersey
            </p>
            <h1 className="mt-6 font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Every local dog deserves a{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">forever home.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 rounded-sm bg-sun/80 sm:h-4" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Shore Saves Animal Rescue rescues, rehabilitates, and rehomes
              at-risk dogs in our local communities — regardless of breed, age,
              or medical needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/adopt">Meet adoptable dogs</LinkButton>
              <LinkButton href="/foster" variant="outline">
                Apply to foster
              </LinkButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -top-6 -right-6 size-28 rounded-full bg-sun" />
            <div className="relative grid grid-cols-5 gap-4">
              <div className="col-span-3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <Image
                  src={happyDog}
                  alt="A smiling rescue dog lying in a sunny field"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 300px, 60vw"
                  className="aspect-[4/5] h-full object-cover"
                  preload
                />
              </div>
              <div className="col-span-2 mt-12 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <Image
                  src={beach}
                  alt="Two rescue dogs on a beach walk under a rainbow"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 200px, 40vw"
                  className="aspect-[3/5] h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <BrandStripe />
      </section>

      {/* About */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Image
            src={volunteers}
            alt="Two Shore Saves volunteers with a husky at the shelter"
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-square rounded-3xl object-cover shadow-lg ring-1 ring-black/5"
          />
          <div>
            <SectionHeading title="Run by volunteers. Funded by people like you.">
              <p>
                Our mission is to create a future where every local dog in need
                finds safety, love, and a forever home.
              </p>
            </SectionHeading>
            <dl className="mt-10 space-y-8">
              <div className="flex gap-4">
                <dt className="font-heading text-3xl font-bold text-primary">
                  100%
                </dt>
                <dd>
                  <p className="font-semibold">Volunteer-run</p>
                  <p className="mt-1 text-muted-foreground">
                    Our founders have volunteered with animals for decades. We
                    provide dogs in need with food, shelter, veterinary care,
                    training, and love until we find them the right family.
                  </p>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="font-heading text-3xl font-bold text-primary">
                  100%
                </dt>
                <dd>
                  <p className="font-semibold">Donor-funded</p>
                  <p className="mt-1 text-muted-foreground">
                    Every dollar helps an animal in need — covering rent and
                    utilities, veterinary care, food, leashes, and collars.
                  </p>
                </dd>
              </div>
            </dl>
            <ArrowLink href="/about" className="mt-8">
              Our story
            </ArrowLink>
          </div>
        </div>
      </Section>

      {/* Ways to help */}
      <Section tone="sand">
        <SectionHeading title="How you can help">
          <p>
            Whether you open your home for a few weeks or forever, you can
            change a dog&apos;s life.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {waysToHelp.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-3xl bg-background p-8 shadow-sm ring-1 ring-border"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <ArrowLink href={item.href} className="mt-6">
                {item.cta}
              </ArrowLink>
            </div>
          ))}
        </div>
      </Section>

      {/* More ways */}
      <Section>
        <SectionHeading title="More ways to support" />
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {moreWays.map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sun/40">
                <item.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <ArrowLink href={item.href} className="mt-3 text-sm">
                  {item.cta}
                </ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

function CtaBand() {
  const outline =
    "border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground dark:bg-transparent"
  return (
    <section className="px-4 pb-20 sm:px-6 md:pb-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Help us save the next dog at the Jersey Shore.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Follow along for dogs needing a foster or forever family, plus
          upcoming events and volunteer opportunities.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton
            href="/donate"
            className="bg-sun text-foreground hover:bg-sun/90"
          >
            Donate now
          </LinkButton>
          <LinkButton href={links.facebook} variant="outline" className={outline}>
            <FacebookIcon className="size-5" />
            Facebook
          </LinkButton>
          <LinkButton
            href={links.instagram}
            variant="outline"
            className={outline}
          >
            <InstagramIcon className="size-5" />
            Instagram
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
