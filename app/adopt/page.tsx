import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import {
  ArrowLink,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { links } from "@/lib/site"
import beachSelfie from "@/public/images/adopt/beach-selfie.jpg"
import collar from "@/public/images/adopt/collar.jpg"
import husky from "@/public/images/adopt/husky.jpg"
import smile from "@/public/images/adopt/smile.jpg"

export const metadata: Metadata = {
  title: "Adopt",
  description:
    "Adopt a rescue dog from Shore Saves. We rescue dogs of all ages, sizes, and breeds in Monmouth County, NJ.",
}

const steps = [
  "Complete the application to enter your information into our records.",
  "One of our volunteers will be in touch for an introductory call.",
  "We'll arrange a home check where 2+ volunteers confirm your home is as described and safe, and introduce the dog to everyone in your family — including pets and kids.",
  "We'll call your references.",
  "Take whatever time you need to decide whether you're a good fit for one another.",
  "Once you're ready, our volunteers ensure a smooth transition from foster or shelter to your home — with a designated volunteer you can contact while your pup settles in.",
]

export default function AdoptPage() {
  return (
    <>
      <PageHero
        eyebrow="Adopt"
        title="Find your new best friend."
        image={beachSelfie}
        imageAlt="A happy family with their adopted Shore Saves dog at the beach"
        actions={
          <>
            <LinkButton href="/adopt/apply">Apply to adopt</LinkButton>
            <LinkButton href={links.petfinder} variant="outline">
              See our dogs on Petfinder
              <ExternalLink className="size-4" />
            </LinkButton>
          </>
        }
      >
        <p>
          Our mission to provide care, comfort, and compassion to animals in
          need includes dogs of all ages, sizes, and breeds. Are you interested
          in welcoming a dog into your loving home?
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-3 gap-4">
            <Image
              src={husky}
              alt="A husky rescue lounging on a couch"
              placeholder="blur"
              sizes="(min-width: 1024px) 180px, 33vw"
              className="col-span-1 row-span-2 h-full rounded-2xl object-cover"
            />
            <Image
              src={smile}
              alt="A smiling rescue dog sitting in the grass"
              placeholder="blur"
              sizes="(min-width: 1024px) 360px, 66vw"
              className="col-span-2 aspect-[4/3] rounded-2xl object-cover"
            />
            <Image
              src={collar}
              alt="A rescue dog wearing a beaded collar"
              placeholder="blur"
              sizes="(min-width: 1024px) 360px, 66vw"
              className="col-span-2 aspect-[4/3] rounded-2xl object-cover object-top"
            />
          </div>
          <div>
            <SectionHeading title="E-meet our dogs">
              <p>
                Every dog currently available for adoption is listed on our
                Petfinder page, with photos, personalities, and needs.
              </p>
              <p>
                Have a specific set of wants and needs in mind — age, size,
                breed? Apply anyway and we&apos;ll contact you when we think
                we&apos;ve found a good match. Someone will get back to you
                within 48 hours.
              </p>
            </SectionHeading>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={links.petfinder} size="md">
                Browse adoptable dogs
                <ExternalLink className="size-4" />
              </LinkButton>
              <LinkButton href="/adopt/apply" variant="outline" size="md">
                Start an application
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading title="What to expect">
          <p>Our adoption process, at a glance.</p>
        </SectionHeading>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-2xl bg-background p-6 ring-1 ring-border"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="leading-relaxed text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <ArrowLink href="/adopt/process">Read the full adoption process</ArrowLink>
          <p className="text-muted-foreground">
            Questions? Email{" "}
            <a
              href={`mailto:${links.email}`}
              className="font-medium text-primary hover:underline"
            >
              {links.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  )
}
