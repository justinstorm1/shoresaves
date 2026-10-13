import type { Metadata } from "next"

import { ArrowLink, GoogleForm, PageHero, Section } from "@/components/site"
import { forms } from "@/lib/site"

export const metadata: Metadata = {
  title: "Adoption Application",
  description: "Apply to adopt a Shore Saves rescue dog.",
}

export default function AdoptionApplicationPage() {
  return (
    <>
      <PageHero eyebrow="Adopt" title="Adoption application">
        <p>
          Complete the form below to submit your information to our records.
          Someone will get back to you within 48 hours.
        </p>
        <p>
          Looking for something specific (age, size, breed)? Apply and
          we&apos;ll contact you when we think we&apos;ve found a good match.
        </p>
        <ArrowLink href="/adopt/process" className="text-base">
          See what happens after you apply
        </ArrowLink>
      </PageHero>
      <Section>
        <div className="mx-auto max-w-3xl">
          <GoogleForm src={forms.adopt} title="Shore Saves adoption application" />
        </div>
      </Section>
    </>
  )
}
