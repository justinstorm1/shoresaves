import type { Metadata } from "next"
import Image from "next/image"
import { CalendarSync, ClipboardCheck, Footprints, Shirt } from "lucide-react"

import {
  GoogleForm,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { forms, links } from "@/lib/site"
import group from "@/public/images/volunteer/group.jpg"
import v02 from "@/public/images/volunteer/v-02.jpg"
import v03 from "@/public/images/volunteer/v-03.jpg"
import v04 from "@/public/images/volunteer/v-04.jpg"
import v06 from "@/public/images/volunteer/v-06.jpg"
import v07 from "@/public/images/volunteer/v-07.jpg"
import v08 from "@/public/images/volunteer/v-08.jpg"
import v09 from "@/public/images/volunteer/v-09.jpg"
import v10 from "@/public/images/volunteer/v-10.jpg"

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer at the Shore Saves kennel in NJ — walking shifts, events, fundraising, and more. Opportunities for volunteers under 18 too.",
}

const howItWorks = [
  {
    icon: ClipboardCheck,
    title: "Orientation",
    body: "Meet an experienced volunteer to sign onboarding paperwork and learn our policies, procedures, and animal-handling best practices — including dog body language, proper leash handling, and safety protocols.",
  },
  {
    icon: CalendarSync,
    title: "Scheduling",
    body: "Instead of the same shift every week, we use a rolling schedule that changes every two weeks, announced on Slack. Pick the time slots that work best for you.",
  },
  {
    icon: Shirt,
    title: "Preparation",
    body: "Wear comfortable, waterproof shoes and weather-appropriate clothing, and bring a water bottle. We provide everything for the dogs — and there are often snacks (and coffee on AM shifts) in the kitchen.",
  },
  {
    icon: Footprints,
    title: "Walking shifts",
    body: "Your shift lead introduces you to each dog. You'll learn to safely leash up, stroll our walking areas, let dogs get their zoomies out in the play yard, and wrap up with cuddles in the living room. Everyone shares cleaning duties.",
  },
]

const youthWays = [
  ["Volunteer at events", "Help at adoption events like Rescue Pawlooza!"],
  ["Run a donation drive", "Collect food, toys, or supplies for our rescue dogs."],
  ["Fundraise for the pups", "Organize a bake sale, lemonade stand, or social media fundraiser."],
  ["Spread awareness", "Share adoptable dogs and our mission on social media!"],
  ["Get creative", "Make dog toys, write adoption bios, or suggest your own ideas!"],
]

const testimonials = [
  {
    name: "Mike",
    quote: [
      "I've been volunteering at Shore Saves for over two years. At a time when my love for dogs met my retirement, it has filled a void in such a satisfying way. Helping and watching the transformation of kennel dogs to home pets is a wonderful experience.",
      "The people with whom I volunteer are some of the nicest people I've ever met in my long life. And the joy of the adopters when they take their new dogs home is a sight to behold. It's hard to tell who's happier, the pups or the humans.",
      "Anyone who thinks volunteering may be for them should give it a try. It's only a few hours a week, or it can be every day — it's up to you. You feel so good at the end of a shift. ❤️",
    ],
  },
  {
    name: "Marsha",
    quote: [
      "I saw a post on my township page for Shore Saves asking for volunteers. I had just adopted my third rescue, and I thought volunteering would be a way to keep helping rescue pups without adopting — since I have officially run out of room on my couch!",
      "Oftentimes the two hours I spend at Shore Saves are the highlight of my day. I've even started running a few of the dogs and get 3–5 miles in most days I volunteer. It's a win-win!",
      "There is something amazing about being surrounded by like-minded individuals with infinite love for rescue dogs. We come from all walks of life — but we're all here for the same reason, and there is truly strength in numbers!",
    ],
  },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="We're all volunteers!"
        image={group}
        imageAlt="A large group of Shore Saves volunteers at an event"
        actions={<LinkButton href="#apply">Complete the volunteer application</LinkButton>}
      >
        <p>
          Shore Saves is run exclusively by volunteers, and we all LOVE working
          with animals. We always need help running our shelter, working with
          animals, fundraising, and more.
        </p>
      </PageHero>

      <Section>
        <SectionHeading title="Volunteering at Shore Saves">
          <p>
            The more volunteers we have at our facility, the more dogs we can
            rescue from NJ&apos;s overcrowded shelters.
          </p>
        </SectionHeading>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-sun/40 px-4 py-2 text-sm font-semibold">
            AM shift · 8–10
          </span>
          <span className="rounded-full bg-sky/30 px-4 py-2 text-sm font-semibold">
            PM shift · 5–7
          </span>
          <span className="rounded-full bg-muted px-4 py-2 text-sm font-semibold">
            Kennel volunteers must be 18+
          </span>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {howItWorks.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-8 ring-1 ring-border"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
          <h3 className="font-heading text-xl font-bold">
            Other ways to volunteer
          </h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-primary-foreground/85">
            Walking shifts are just one option. Some volunteers help with
            administrative tasks like organizing donations and cleaning living
            areas. Remote volunteers help from afar — like organizing events.
            Whatever sounds interesting, fill out the form and we&apos;ll be in
            touch.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="How can volunteers under 18 help?">
              <p>
                We love young dog lovers who want to make a difference! Handling
                dogs and kennel work is limited to adults due to insurance, but
                there are still great ways to get involved:
              </p>
            </SectionHeading>
            <dl className="mt-8 space-y-4">
              {youthWays.map(([t, d]) => (
                <div key={t} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-primary" />
                  <div>
                    <dt className="inline font-semibold">{t} — </dt>
                    <dd className="inline text-muted-foreground">{d}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-muted-foreground">
              Have another idea? We&apos;d love to hear it:{" "}
              <a
                href={`mailto:${links.email}`}
                className="font-medium text-primary hover:underline"
              >
                {links.email}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[v02, v03, v08, v10].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Shore Saves volunteers with rescue dogs"
                placeholder="blur"
                sizes="(min-width: 1024px) 270px, 50vw"
                className="aspect-square rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Hear from our volunteers" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-sand p-8 md:p-10"
            >
              <blockquote className="flex-1 space-y-4 leading-relaxed">
                {t.quote.map((p) => (
                  <p key={p}>&ldquo;{p}&rdquo;</p>
                ))}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {t.name[0]}
                </span>
                <span className="font-heading text-lg font-bold">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[v04, v06, v07, v09].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="A Shore Saves volunteer with a rescue dog"
              placeholder="blur"
              sizes="(min-width: 768px) 270px, 50vw"
              className="aspect-square rounded-2xl object-cover"
            />
          ))}
        </div>
      </Section>

      <Section tone="sand" id="apply">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading title="Volunteer application">
              <p>
                Fill out the application and we&apos;ll reach out to discuss
                orientation and opportunities.
              </p>
            </SectionHeading>
          </div>
          <GoogleForm
            src={forms.volunteer}
            title="Shore Saves volunteer application"
          />
        </div>
      </Section>
    </>
  )
}
