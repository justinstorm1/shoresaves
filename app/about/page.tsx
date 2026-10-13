import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import { PawPrint } from "lucide-react"

import {
  ArrowLink,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import team from "@/public/images/about/team.jpg"
import v03 from "@/public/images/about/volunteer-03.jpg"
import v04 from "@/public/images/about/volunteer-04.jpg"
import v07 from "@/public/images/about/volunteer-07.jpg"
import v09 from "@/public/images/about/volunteer-09.jpg"
import v10 from "@/public/images/about/volunteer-10.jpg"
import v12 from "@/public/images/about/volunteer-12.jpg"
import v13 from "@/public/images/about/volunteer-13.jpg"
import w15 from "@/public/images/about/world-15.jpg"
import w16 from "@/public/images/about/world-16.jpg"
import w17 from "@/public/images/about/world-17.jpg"
import w18 from "@/public/images/about/world-18.jpg"
import w19 from "@/public/images/about/world-19.jpg"
import w20 from "@/public/images/about/world-20.jpg"
import brody from "@/public/images/memorial/brody.jpg"
import buddy from "@/public/images/memorial/buddy.jpg"
import cookie from "@/public/images/memorial/cookie.jpg"
import cooper from "@/public/images/memorial/cooper.jpg"
import dj from "@/public/images/memorial/dj.jpg"
import faith from "@/public/images/memorial/faith.jpg"
import freckles from "@/public/images/memorial/freckles.jpg"
import freddy from "@/public/images/memorial/freddy.jpg"
import kane from "@/public/images/memorial/kane.jpg"
import snoopy from "@/public/images/memorial/snoopy.jpg"
import trent from "@/public/images/memorial/trent.jpg"
import warren from "@/public/images/memorial/warren.jpg"

export const metadata: Metadata = {
  title: "About",
  description:
    "Shore Saves is a 100% volunteer-run animal rescue in Monmouth County, NJ, saving dogs from overcrowded shelters since 2021.",
}

const teamPhotos = [v03, v10, v12, v07, v09, v04, v13]
const worldPhotos = [
  { src: w15, place: "Martha's Vineyard, MA" },
  { src: w16, place: "Amsterdam, Netherlands" },
  { src: w17, place: "Sedona, AZ" },
  { src: w18, place: "Acadia National Park, ME" },
  { src: w19, place: "Sweden" },
  { src: w20, place: "Colorado" },
]

const memorial: { name: string; src?: StaticImageData }[] = [
  { name: "Freddy", src: freddy },
  { name: "Ellen aka Lulu" },
  { name: "Buddy", src: buddy },
  { name: "Trent", src: trent },
  { name: "Warren", src: warren },
  { name: "Bentley" },
  { name: "Nitro" },
  { name: "Snoopy", src: snoopy },
  { name: "Faith", src: faith },
  { name: "David aka DJ", src: dj },
  { name: "Freckles", src: freckles },
  { name: "Kane", src: kane },
  { name: "Brody", src: brody },
  { name: "Rocky" },
  { name: "Cookie", src: cookie },
  { name: "Cooper", src: cooper },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Shore Saves"
        title="Care, compassion, and second chances."
        image={team}
        imageAlt="Shore Saves volunteers with a rescue dog"
        actions={
          <>
            <LinkButton href="/volunteer">Volunteer with us</LinkButton>
            <LinkButton href="/adopt" variant="outline">
              View adoptable dogs
            </LinkButton>
          </>
        }
      >
        <p>
          Shore Saves is dedicated to rescuing, rehabilitating, and rehoming
          at-risk dogs in our local NJ community, regardless of breed, age, or
          medical needs. We take an active role in reducing pet homelessness
          through responsible adoption, spay/neuter advocacy, and community
          education.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Our story",
              body: "While Shore Saves only began in 2021, our volunteers and Board members have been working with animals for decades. We saw the need for compassionate volunteers to save animals around the country — and so began the story of Shore Saves!",
            },
            {
              title: "Our mission",
              body: "To create a future where every local dog in need finds safety, love, and a forever home.",
            },
            {
              title: "Our volunteers",
              body: "100% volunteers! Based in Monmouth County, NJ, we save dogs from local and southern shelters where they would otherwise have been euthanized due to overcrowding.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-4 border-sun pt-6">
              <h2 className="font-heading text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <SectionHeading title="Meet the team">
            <p>
              Our mission is the primary driver behind the Shore Saves culture.
              We work in respectful partnership with volunteers of all ages and
              backgrounds, and champion a culture of belonging where every
              member feels valued.
            </p>
            <p>
              When you join, you can be as involved as you want to be. Our
              Slack channel is where we share stories and photos from recent
              shifts — and our adopted dogs living their best lives.
            </p>
            <ArrowLink href="/volunteer">Join us — fill out a volunteer form</ArrowLink>
          </SectionHeading>
          <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {teamPhotos.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Shore Saves volunteers with rescue dogs"
                placeholder="blur"
                sizes="(min-width: 1024px) 220px, 45vw"
                className="w-full break-inside-avoid rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Shore Saves around the world">
          <p>
            One of our favorite trends on Slack: volunteers sharing photos of
            themselves wearing Shore Saves merch everywhere they go.
          </p>
        </SectionHeading>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {worldPhotos.map((p) => (
            <figure key={p.place} className="overflow-hidden rounded-2xl ring-1 ring-border">
              <Image
                src={p.src}
                alt={`Shore Saves merch in ${p.place}`}
                placeholder="blur"
                sizes="(min-width: 768px) 360px, 50vw"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm font-medium">
                {p.place}
              </figcaption>
            </figure>
          ))}
        </div>
        <ArrowLink href="/shop" className="mt-8">
          Get your own Shore Saves gear
        </ArrowLink>
      </Section>

      <Section tone="sand">
        <SectionHeading title="Our rescues who have crossed the Rainbow Bridge">
          <p>
            In loving memory of the dogs we have cared for who left us too
            soon. Their lives touched ours in special ways, and their legacies
            live on in the work we do.
          </p>
        </SectionHeading>
        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
          {memorial.map((dog) => (
            <li key={dog.name} className="text-center">
              {dog.src ? (
                <Image
                  src={dog.src}
                  alt={dog.name}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 130px, (min-width: 640px) 25vw, 50vw"
                  className="aspect-square w-full rounded-full object-cover ring-4 ring-background"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded-full bg-background text-primary/40 ring-4 ring-background">
                  <PawPrint className="size-10" />
                </div>
              )}
              <p className="mt-3 text-sm font-semibold">{dog.name}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
