import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import { ExternalLink } from "lucide-react"

import {
  ArrowLink,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { links } from "@/lib/site"
import i02 from "@/public/images/shop/item-02.jpg"
import i03 from "@/public/images/shop/item-03.jpg"
import i04 from "@/public/images/shop/item-04.jpg"
import i05 from "@/public/images/shop/item-05.jpg"
import i06 from "@/public/images/shop/item-06.jpg"
import i07 from "@/public/images/shop/item-07.jpg"
import i08 from "@/public/images/shop/item-08.jpg"
import i09 from "@/public/images/shop/item-09.jpg"
import i10 from "@/public/images/shop/item-10.jpg"
import i11 from "@/public/images/shop/item-11.jpg"
import i12 from "@/public/images/shop/item-12.jpg"
import i14 from "@/public/images/shop/item-14.jpg"
import i15 from "@/public/images/shop/item-15.jpg"
import i16 from "@/public/images/shop/item-16.jpg"
import i17 from "@/public/images/shop/item-17.jpg"
import i18 from "@/public/images/shop/item-18.jpg"
import tumbler from "@/public/images/shop/tumbler.jpg"

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop Shore Saves merch — apparel, drinkware, and accessories. Every purchase supports our rescue.",
}

const categories: { title: string; items: [StaticImageData, string][] }[] = [
  {
    title: "Summer apparel",
    items: [
      [i02, "Black tank, small logo"],
      [i03, "Black tank, large logo"],
      [i04, "White flowy tank, small logo"],
      [i05, "White flowy tank, large logo"],
    ],
  },
  {
    title: "Winter apparel",
    items: [
      [i06, "Long sleeve tee, small logo"],
      [i07, "Long sleeve tee, back logo"],
      [i08, "Black hoodie, small logo"],
      [i09, "Black hoodie, back logo"],
      [i10, "“I Like Big Mutts” hoodie"],
      [i11, "Blue hoodie, back logo"],
    ],
  },
  {
    title: "Drinkware",
    items: [
      [i12, "Shore Saves mug"],
      [i14, "“I Like Big Mutts” mug"],
    ],
  },
  {
    title: "Accessories",
    items: [
      [i15, "Tote bag"],
      [i16, "Bucket hat"],
      [i17, "Backpack"],
      [i18, "Backpack (back)"],
    ],
  },
]

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Sweet Shore Saves gear."
        image={tumbler}
        imageAlt="A Shore Saves tumbler in the ocean surf"
        actions={
          <>
            <LinkButton href={links.merch}>
              Visit the merch store
              <ExternalLink className="size-4" />
            </LinkButton>
            <LinkButton href={links.merchFeedback} variant="outline">
              Share merch feedback
            </LinkButton>
          </>
        }
      >
        <p>
          Unisex, men&apos;s, women&apos;s, and children&apos;s sizes are
          available. Take a photo wearing your Shore Saves merch and tag us on
          social media for a chance to be featured!
        </p>
      </PageHero>

      {categories.map((cat, i) => (
        <Section key={cat.title} tone={i % 2 ? "sand" : "plain"}>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading title={cat.title} />
            <ArrowLink href={links.merch} className="hidden shrink-0 sm:inline-flex">
              Shop {cat.title.toLowerCase()}
            </ArrowLink>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {cat.items.map(([src, label]) => (
              <a
                key={label}
                href={links.merch}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden rounded-2xl bg-[#f4f5f7] ring-1 ring-border">
                  <Image
                    src={src}
                    alt={label}
                    placeholder="blur"
                    sizes="(min-width: 768px) 270px, 50vw"
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm font-medium">{label}</p>
              </a>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <p className="text-center text-muted-foreground">
          These are just a preview — see everything at{" "}
          <a
            href={links.merch}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            shore-saves.creator-spring.com
          </a>
          .
        </p>
      </Section>
    </>
  )
}
