import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"

import { LinkButton, PageHero, Section } from "@/components/site"
import { links } from "@/lib/site"
import hug from "@/public/images/adopt/hug.jpg"

export const metadata: Metadata = {
  title: "Adoption Process",
  description:
    "Here's what happens after you apply to adopt a Shore Saves dog — from your introductory call to post-adoption support.",
}

const steps = [
  {
    label: "Step one",
    title: "Apply online",
    body: [
      "After you complete our online adoption application, your information is automatically entered into our records.",
      "One of our volunteers will be in touch for an introductory call.",
    ],
  },
  {
    label: "Step two",
    title: "Introductory call",
    body: [
      "We'll tell you all about the dog you've applied for and ask you some questions. If it's a good fit, we'll schedule a time for you to meet the dog in person!",
    ],
  },
  {
    label: "Step three",
    title: "Home check & family meet",
    body: [
      "Following the initial meeting, we'll arrange a home check where our volunteers confirm your home is appropriate for the dog, and we'll introduce the dog to everyone in your family.",
      "If you have other animals, we usually have the humans meet the dog before doing a dog-to-dog meet.",
    ],
  },
  {
    label: "Step four",
    title: "References & decision",
    body: [
      "Once we speak with your references and determine it's a good fit, take some time to decide if you're ready to move forward. When you are, we'll arrange for you to pick up the dog or have someone transport them to you.",
    ],
  },
  {
    label: "Post-adoption",
    title: "Ongoing support",
    body: [
      "Our volunteers ensure a smooth transition from foster or shelter to your home. You'll have a designated volunteer to contact with questions while your pup settles into your family.",
    ],
  },
]

export default function AdoptionProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Adopt"
        title="About our adoption process"
        image={hug}
        imageAlt="A volunteer hugging a happy rescue dog"
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
          Submit an online application, then meet the dog you can&apos;t stop
          thinking about in person! We prioritize the safety and well-being of
          our dogs, so we ask all potential adopters to apply before meeting.
        </p>
        <p className="font-medium text-foreground">
          Applying is non-committal — it just solidifies your interest.
        </p>
      </PageHero>

      <Section>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          What happens after you apply
        </h2>
        <ol className="relative mt-12 space-y-10 border-l-2 border-sky/50 pl-8 md:ml-4 md:pl-12">
          {steps.map((step, i) => (
            <li key={step.label} className="relative">
              <span className="absolute top-0 -left-[calc(2rem+1.1rem)] flex size-9 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground ring-4 ring-background md:-left-[calc(3rem+1.1rem)]">
                {i < 4 ? i + 1 : "✓"}
              </span>
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                {step.label}
              </p>
              <h3 className="mt-1 font-heading text-xl font-bold">
                {step.title}
              </h3>
              <div className="mt-2 max-w-2xl space-y-2 leading-relaxed text-muted-foreground">
                {step.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-muted-foreground">
          Questions about our process? Contact us at{" "}
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
