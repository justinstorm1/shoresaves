import type { Metadata } from "next"
import {
  Bone,
  Box,
  Brush,
  Package,
  Phone,
  Soup,
  SprayCan,
  Stethoscope,
  ToyBrick,
  BedDouble,
} from "lucide-react"

import { LinkButton, PageHero, Section, SectionHeading } from "@/components/site"
import { links } from "@/lib/site"

export const metadata: Metadata = {
  title: "Donate Supplies",
  description:
    "Donate supplies to Shore Saves via our Amazon or Chewy wish lists, or drop off cleaning supplies, treats, toys, beds, and crates.",
}

const needs = [
  {
    icon: SprayCan,
    title: "Cleaning supplies",
    body: "Clorox wipes, paper towels, garbage bags, Dawn dish soap, laundry detergent, mops and mop heads",
  },
  {
    icon: ToyBrick,
    title: "Toys",
    body: "Durable dog toys, Kongs, frisbees, tennis balls, soccer balls",
  },
  {
    icon: Bone,
    title: "Treats",
    body: "Training treats, bully sticks, antlers (made in USA), and peanut butter",
  },
  { icon: BedDouble, title: "Dog beds", body: "All sizes" },
  { icon: Soup, title: "Canned dog food", body: "Made in USA" },
  { icon: Box, title: "Storage", body: "Plastic storage containers with lids" },
  { icon: Brush, title: "Grooming", body: "Brushes, nail clippers" },
  { icon: Package, title: "Dog crates", body: "All sizes" },
  {
    icon: Stethoscope,
    title: "And more",
    body: "Veterinary supplies, dog clothes and jackets — just ask!",
  },
]

export default function DonateSuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Essential supplies for everyday operations"
        actions={
          <>
            <LinkButton href={links.amazonWishlist}>Shop our Amazon wish list</LinkButton>
            <LinkButton href={links.chewyWishlist} variant="outline">
              Shop our Chewy wish list
            </LinkButton>
          </>
        }
      >
        <p>
          Purchase online and ship directly to Shore Saves — donations from our
          wish lists arrive ready for immediate use. Thank you in advance for
          your generosity.
        </p>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Drop-off supplies">
            <p>Please call us to arrange a donation of any of the items below.</p>
          </SectionHeading>
          <LinkButton href={`tel:${links.phone}`} variant="outline" size="md">
            <Phone className="size-4" />
            {links.phoneDisplay}
          </LinkButton>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((n) => (
            <div
              key={n.title}
              className="flex gap-4 rounded-2xl p-5 ring-1 ring-border"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sun/40">
                <n.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold">{n.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {n.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
