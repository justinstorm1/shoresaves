import type { Metadata } from "next"
import Image from "next/image"
import { Heart, House, Sparkles } from "lucide-react"

import {
  ArrowLink,
  GoogleForm,
  LinkButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site"
import { forms, links } from "@/lib/site"
import car from "@/public/images/foster/car.jpg"
import field from "@/public/images/foster/field.jpg"
import rest from "@/public/images/foster/rest.jpg"
import smile from "@/public/images/foster/smile.jpg"
import snuggle from "@/public/images/foster/snuggle.jpg"

export const metadata: Metadata = {
  title: "Foster",
  description:
    "Foster a Shore Saves rescue dog. It's free — we provide all the supplies. All we need from you is compassion.",
}

const benefits = [
  "Have an animal companion without the lifetime commitment.",
  "You'll save a life! Help an animal recover from illness or injury, with medical expenses covered.",
  "Foster homes help animals transition from the stress of living at the shelter.",
]

const responsibilities = [
  {
    icon: House,
    title: "Basic needs",
    body: "Provide a safe, clean, and caring environment with food, water, toys, and shelter.",
  },
  {
    icon: Sparkles,
    title: "Well-being",
    body: "Monitor physical and mental well-being. Provide exercise, training, and socialization.",
  },
  {
    icon: Heart,
    title: "Love",
    body: "Provide comfort and patience while your foster decompresses and gets ready for adoption.",
  },
]

export default function FosterPage() {
  return (
    <>
      <PageHero
        eyebrow="Foster"
        title="Open your home. Save more lives."
        image={car}
        imageAlt="A happy dog with its head out of a car window"
        actions={
          <>
            <LinkButton href="#apply">Apply to foster</LinkButton>
            <LinkButton href={links.fosterVideo} variant="outline">
              Watch how fostering works
            </LinkButton>
          </>
        }
      >
        <p>
          If we had more people willing to open their homes to dogs in need, we
          could save more. Fostering is free — we provide all the supplies you
          need. All we need from you is compassion.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading title="We'll match you with a good fit">
            <p>
              We&apos;re in passionate pursuit of a shelter, but until then, we
              rely on fosters to provide a crash pad for our dogs. Our team
              greets each rescue, bathes them, settles them in, and conducts
              temperament tests so we can intelligently match them with a
              foster.
            </p>
            <p>
              Every animal has different needs. Some need a quiet home for
              medical reasons, some need help with manners and basic obedience,
              and some just need a place to sleep. We&apos;ll match you with a
              dog whose temperament, size, and age suit you, your home, and
              your family.
            </p>
          </SectionHeading>
          <figure>
            <Image
              src={snuggle}
              alt="A foster dog snuggling with the foster family's dog, Penny"
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              A real photo of one of our foster dogs snuggling with the foster
              family&apos;s forever dog, Penny!
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              The benefits of fostering
            </h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-sun" />
                  <span className="leading-relaxed text-muted-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[rest, smile, field].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="A Shore Saves foster dog"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 180px, 33vw"
                  className="aspect-square rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              Responsibilities of a foster parent
            </h2>
            <div className="mt-6 space-y-4">
              {responsibilities.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 rounded-2xl bg-background p-5 ring-1 ring-border"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          It&apos;s never easy to say &ldquo;goodbye&rdquo; to a foster baby,
          but seeing them in their forever homes makes it all worthwhile. And
          there&apos;s always another one waiting to be saved!
        </p>
      </Section>

      <Section id="apply">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading title="Apply to become a foster">
              <p>
                Want to hear what it&apos;s really like? We&apos;d be happy to
                connect you with one of our existing fosters. Start the
                conversation by emailing{" "}
                <a
                  href={`mailto:${links.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {links.email}
                </a>
                .
              </p>
            </SectionHeading>
            <ArrowLink href={links.fosterVideo} className="mt-6">
              Watch a video about fostering
            </ArrowLink>
          </div>
          <GoogleForm src={forms.foster} title="Shore Saves foster application" />
        </div>
      </Section>
    </>
  )
}
