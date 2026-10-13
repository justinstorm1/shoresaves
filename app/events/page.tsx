import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Clock, Info, MapPin } from "lucide-react"

import {
  FacebookIcon,
  InstagramIcon,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { links } from "@/lib/site"
import golf from "@/public/images/events/golf.jpg"
import golfSponsors from "@/public/images/events/golf-sponsors.jpg"
import grenville06 from "@/public/images/events/grenville-06.jpg"
import grenville07 from "@/public/images/events/grenville-07.jpg"
import grenville08 from "@/public/images/events/grenville-08.jpg"
import pawlooza2025 from "@/public/images/events/pawlooza-2025-sponsors.jpg"
import pawlooza2026 from "@/public/images/events/pawlooza-2026-sponsors.jpg"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Shore Saves fundraising and community events at the Jersey Shore — Rescue Pawlooza, Photos with Santa Paws, our annual golf outing, and more.",
}

const upcoming = [
  {
    title: "Photos with Santa Paws",
    month: "Nov",
    day: "29",
    time: "12 – 3 PM, Sunday",
    place: "Asbury Park Brewery, Asbury Park, NJ",
  },
  {
    title: "Rescue Pawlooza",
    month: "May",
    day: "8",
    time: "11 AM – 4 PM, Saturday",
    place: "Bar Anticipation (Bar A), Lake Como, NJ",
  },
]

const recent: {
  title: string
  body?: React.ReactNode
  images?: StaticImageData[]
  wide?: StaticImageData
}[] = [
  {
    title: "The Shore Saves 5th Annual Golf Outing",
    body: "Thank you to everyone — sponsors, golfers, and volunteers — who helped make our 2026 golf outing a huge success! Proceeds will cover our operating costs for MONTHS. Thank you, Pebble Creek, for having us!",
    images: [golf],
  },
  {
    title: "Rescue Pawlooza 2026",
    body: "THANK YOU to our sponsors, attendees, vendors, and volunteers for making Rescue Pawlooza, our largest fundraising event of the year, a HUGE success. 100% of the proceeds will be used to fund our rescue. Thank you to Bar Anticipation for hosting us!",
    wide: pawlooza2026,
  },
  {
    title: "The POAC Autism Walk for a Difference 2026",
  },
  {
    title: "Beach Party at The Grenville",
    body: (
      <>
        In February 2026 we hosted our annual dinner at the{" "}
        <a
          href="https://www.thegrenville.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Grenville Hotel &amp; Restaurant
        </a>{" "}
        — a fundraiser celebrating our volunteers, donors, and the families
        who&apos;ve adopted Shore Saves dogs. 100% of proceeds went directly to
        rescuing dogs. A heartfelt thank you to the Grenville for hosting us
        year after year and helping us raise thousands for dogs in need.
      </>
    ),
    images: [grenville06, grenville07, grenville08],
  },
  {
    title: "Thank you to the sponsors of our 4th Annual Golf Outing",
    body: (
      <>
        Our kennel runs on kindness. Every dollar from these sponsorships went
        directly to our kennel and the dogs who need us.{" "}
        <Link href="/adopt" className="font-medium text-primary hover:underline">
          See the dogs this sponsorship helped us save!
        </Link>
      </>
    ),
    wide: golfSponsors,
  },
  {
    title: "Shore Saves 4th Annual Rescue Pawlooza",
    body: "Held May 10th at Bar Anticipation in Lake Como, NJ — the fundraiser that helps us rescue dogs from NJ's overcrowded shelters all year long. A huge THANK YOU to our sponsors: as a non-profit, we simply could not rescue dogs without your support.",
    wide: pawlooza2025,
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="Come meet the team.">
        <p>
          Join us at our fundraising and community events around the Jersey
          Shore. Visit our social pages for event-specific details, like
          whether adoptable dogs will be on-site for meet-and-greets or merch
          will be for sale.
        </p>
      </PageHero>

      <Section>
        <SectionHeading title="Upcoming events" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {upcoming.map((e) => (
            <div
              key={e.title}
              className="flex gap-6 rounded-3xl p-6 ring-1 ring-border md:p-8"
            >
              <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {e.month}
                </span>
                <span className="font-heading text-3xl leading-none font-bold">
                  {e.day}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">{e.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4 shrink-0" />
                  {e.time}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  {e.place}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 rounded-2xl bg-sun/25 p-5 text-sm">
          <Info className="mt-0.5 size-5 shrink-0" />
          <p>
            Please note that we do not conduct on-site adoptions.{" "}
            <Link
              href="/adopt/process"
              className="font-semibold text-primary hover:underline"
            >
              Learn about our adoption process
            </Link>
            .
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={links.facebook} variant="outline" size="md">
            <FacebookIcon className="size-4" />
            Event updates on Facebook
          </LinkButton>
          <LinkButton href={links.instagram} variant="outline" size="md">
            <InstagramIcon className="size-4" />
            Follow on Instagram
          </LinkButton>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading title="Recent events">
          <p>
            Thank you to everyone who has supported and attended our recent
            events. We&apos;re so grateful for the community&apos;s support.
          </p>
        </SectionHeading>
        <div className="mt-12 space-y-6">
          {recent.map((e) => (
            <article
              key={e.title}
              className="overflow-hidden rounded-3xl bg-background ring-1 ring-border"
            >
              <div
                className={
                  e.images?.length === 1
                    ? "grid md:grid-cols-[1.4fr_1fr]"
                    : undefined
                }
              >
                <div className="p-8 md:p-10">
                  <h3 className="font-heading text-2xl font-bold">{e.title}</h3>
                  {e.body && (
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                      {e.body}
                    </p>
                  )}
                </div>
                {e.images?.length === 1 && (
                  <Image
                    src={e.images[0]}
                    alt={e.title}
                    placeholder="blur"
                    sizes="(min-width: 768px) 450px, 100vw"
                    className="h-full max-h-96 w-full object-cover"
                  />
                )}
              </div>
              {e.images && e.images.length > 1 && (
                <div className="grid grid-cols-3 gap-1">
                  {e.images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${e.title} photo ${i + 1}`}
                      placeholder="blur"
                      sizes="33vw"
                      className="aspect-square w-full object-cover"
                    />
                  ))}
                </div>
              )}
              {e.wide && (
                <div className="px-8 pb-8 md:px-10 md:pb-10">
                  <Image
                    src={e.wide}
                    alt={`${e.title} sponsors`}
                    placeholder="blur"
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="mx-auto w-full max-w-3xl rounded-2xl ring-1 ring-border"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
          <h2 className="font-heading text-3xl font-bold">
            Interested in hosting an event with us?
          </h2>
          <p className="mt-3 text-primary-foreground/85">
            We&apos;d love to hear from you.
          </p>
          <LinkButton
            href={`mailto:${links.email}`}
            className="mt-8 bg-sun text-foreground hover:bg-sun/90"
          >
            Email {links.email}
          </LinkButton>
        </div>
      </Section>
    </>
  )
}
