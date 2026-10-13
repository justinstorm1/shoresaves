import type { Metadata } from "next"
import Image from "next/image"
import { Building2, ExternalLink, Mail, Smartphone, Wallet } from "lucide-react"

import {
  ArrowLink,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { links } from "@/lib/site"
import bissell from "@/public/images/donate/bissell.png"
import honoraryCard from "@/public/images/donate/honorary-card.jpg"
import salems from "@/public/images/donate/salems-project.png"
import supplies from "@/public/images/donate/supplies.jpg"
import titos from "@/public/images/donate/titos.png"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Shore Saves, a 501(c)(3) volunteer-run dog rescue (EIN 87-2687524). Donate online, by Venmo, PayPal, or check, or give supplies.",
}

const ways = [
  {
    icon: Wallet,
    title: "Donate online",
    body: "One-time or monthly, via Givebutter.",
    action: { label: "Donate now", href: links.givebutter },
  },
  {
    icon: Smartphone,
    title: "Venmo",
    body: "Send to @shoresaves",
  },
  {
    icon: Wallet,
    title: "PayPal",
    body: "Send to shoresaves@gmail.com",
    action: { label: "Open PayPal", href: links.paypal },
  },
  {
    icon: Mail,
    title: "Send a check",
    body: "Shore Saves, PO Box 7, Farmingdale, NJ 07727",
  },
]

const costs = [
  ["$35", "monthly food and treats"],
  ["$50", "monthly preventatives"],
  ["$125", "transporting"],
  ["$300", "basic vaccinations"],
  ["$400", "spay/neuter"],
  ["$1,000", "heartworm treatment"],
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Harnessing the power of community."
        image={supplies}
        imageAlt="Donated dog supplies including food, toys, and towels"
        actions={
          <>
            <LinkButton href={links.givebutter}>
              Donate now
              <ExternalLink className="size-4" />
            </LinkButton>
            <LinkButton href="/donate/supplies" variant="outline">
              Donate supplies
            </LinkButton>
          </>
        }
      >
        <p>
          Shore Saves is a 501(c)(3) non-profit charity (EIN: 87-2687524) and a
          100% volunteer-run, donor-funded animal rescue. 100% of your donation
          goes directly to the care of the animals.
        </p>
      </PageHero>

      <Section>
        <SectionHeading title="Donate financially">
          <p>
            A monthly or one-time donation helps us provide our dogs with
            shelter, medical care, food, training, and love until we find them
            their forever family.
          </p>
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <div
              key={w.title}
              className="flex flex-col rounded-3xl p-6 ring-1 ring-border"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <w.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">{w.title}</h3>
              <p className="mt-1 flex-1 text-muted-foreground">{w.body}</p>
              {w.action && (
                <ArrowLink href={w.action.href} className="mt-4 text-sm">
                  {w.action.label}
                </ArrowLink>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Set up a monthly donation">
              <p>
                A recurring gift provides steady support to the pups who need
                it most. It&apos;s quick to set up, and it helps us give our
                dogs the care they deserve, day in and day out.
              </p>
            </SectionHeading>
            <ul className="mt-6 space-y-3">
              {[
                "A safe, comfy home while they wait for their forever family.",
                "Vet care to keep them happy and healthy.",
                "Food & treats to keep their bellies full and tails wagging.",
                "Training & love to help increase their adoptability.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-sun" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <LinkButton href={links.givebutter} className="mt-8">
              Set up a monthly donation
              <ExternalLink className="size-4" />
            </LinkButton>
          </div>
          <div className="rounded-3xl bg-background p-8 ring-1 ring-border md:p-10">
            <h3 className="font-heading text-2xl font-bold">
              How every dollar helps
            </h3>
            <p className="mt-2 text-muted-foreground">
              Average expenses involved in caring for each of our rescues:
            </p>
            <dl className="mt-6 divide-y">
              {costs.map(([amount, label]) => (
                <div key={label} className="flex items-baseline gap-4 py-3">
                  <dt className="w-20 shrink-0 font-heading text-xl font-bold text-primary">
                    {amount}
                  </dt>
                  <dd className="text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 rounded-3xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-12">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <Building2 className="size-7" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Ask if your employer will match your gift
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-primary-foreground/85">
              Matching gift programs can double — sometimes triple — your
              donation at no additional cost to you. As a 501(c)(3), Shore
              Saves is eligible for employee matching programs.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl bg-white/10 px-6 py-4 text-center">
            <p className="text-sm text-primary-foreground/75">Our EIN</p>
            <p className="font-heading text-2xl font-bold">87-2687524</p>
          </div>
        </div>
      </Section>

      <Section tone="sand" id="honorary">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <SectionHeading title="Make an honorary donation">
              <p>
                The perfect gift to cross someone off your list — and help us
                rescue dogs. Win-win! You can also celebrate the life of beloved
                family and friends, human or K9, with a donation in their
                memory.
              </p>
            </SectionHeading>
            <ol className="mt-8 space-y-5">
              <li className="flex gap-4">
                <Step n={1} />
                <p className="text-muted-foreground">
                  Make a donation via Venmo, PayPal, or paper check.
                </p>
              </li>
              <li className="flex gap-4">
                <Step n={2} />
                <div className="text-muted-foreground">
                  <p>
                    Email{" "}
                    <a
                      href={`mailto:${links.email}`}
                      className="font-medium text-primary hover:underline"
                    >
                      {links.email}
                    </a>{" "}
                    and tell us:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      How to fill in the blanks: &ldquo;_____ has made a
                      donation to Shore Saves Animal Rescue in honor of
                      _____.&rdquo;
                    </li>
                    <li>Whether to include any photo(s) on the card</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <Step n={3} />
                <p className="text-muted-foreground">
                  We&apos;ll customize a card and either send it to you
                  digitally to pass along, or mail a paper copy directly to
                  your recipient.
                </p>
              </li>
            </ol>
          </div>
          <Image
            src={honoraryCard}
            alt="Example honorary donation card made in loving memory of Scout"
            placeholder="blur"
            sizes="(min-width: 1024px) 440px, 100vw"
            className="mx-auto w-full max-w-sm rounded-3xl shadow-xl"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading title="Donate supplies">
            <p>
              Shop our Amazon or Chewy wish lists to ship supplies directly to
              us, or call to arrange a drop-off of cleaning supplies, treats,
              beds, toys, crates, and more.
            </p>
          </SectionHeading>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <LinkButton href="/donate/supplies">See what we need</LinkButton>
            <LinkButton href={links.amazonWishlist} variant="outline">
              Amazon wish list
              <ExternalLink className="size-4" />
            </LinkButton>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading title="Thank you to our partners">
          <p>
            We couldn&apos;t accomplish our goals without the support,
            involvement, and enthusiasm of an entire community of like-minded
            supporters — big and small, near and far.
          </p>
        </SectionHeading>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: salems, alt: "Salem's Project", href: "https://www.etsy.com/shop/SalemsProject" },
            { src: titos, alt: "Tito's Handmade Vodka", href: "https://www.titosvodka.com/" },
            { src: bissell, alt: "Bissell Pet Foundation" },
          ].map((p) => {
            const logo = (
              <Image
                src={p.src}
                alt={p.alt}
                sizes="200px"
                className="max-h-24 w-auto object-contain"
              />
            )
            return p.href ? (
              <a
                key={p.alt}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-36 items-center justify-center rounded-2xl bg-white p-6 ring-1 ring-border transition hover:shadow-md"
              >
                {logo}
              </a>
            ) : (
              <div
                key={p.alt}
                className="flex h-36 items-center justify-center rounded-2xl bg-white p-6 ring-1 ring-border"
              >
                {logo}
              </div>
            )
          })}
          <a
            href="https://www.maxandneo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-36 items-center justify-center rounded-2xl bg-white p-6 font-heading text-2xl font-bold ring-1 ring-border transition hover:shadow-md"
          >
            Max &amp; Neo
          </a>
        </div>
        <p className="mt-8 text-muted-foreground">
          Interested in partnering with Shore Saves? Email{" "}
          <a
            href={`mailto:${links.email}`}
            className="font-medium text-primary hover:underline"
          >
            {links.email}
          </a>
          .
        </p>
      </Section>
    </>
  )
}

function Step({ n }: { n: number }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
      {n}
    </span>
  )
}
