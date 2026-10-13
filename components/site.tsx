import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import type { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href)

export function SmartLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http")
    return (
      <a
        href={href}
        className={className}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export function LinkButton({
  href,
  variant,
  size = "lg",
  className,
  children,
}: {
  href: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: "md" | "lg"
  className?: string
  children: React.ReactNode
}) {
  return (
    <SmartLink
      href={href}
      className={cn(
        buttonVariants({ variant }),
        "rounded-full font-semibold",
        size === "lg" ? "h-12 px-6 text-base" : "h-10 px-5 text-sm",
        className
      )}
    >
      {children}
    </SmartLink>
  )
}

export function ArrowLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  const Icon = href.startsWith("http") ? ExternalLink : ArrowRight
  return (
    <SmartLink
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-semibold text-primary",
        className
      )}
    >
      {children}
      <Icon className="size-4 transition-transform group-hover:translate-x-0.5" />
    </SmartLink>
  )
}

export function PageHero({
  eyebrow,
  title,
  children,
  actions,
  image,
  imageAlt = "",
}: {
  eyebrow?: string
  title: React.ReactNode
  children?: React.ReactNode
  actions?: React.ReactNode
  image?: StaticImageData
  imageAlt?: string
}) {
  return (
    <section className="bg-sand">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20",
          image && "lg:grid-cols-[1.15fr_1fr]"
        )}
      >
        <div className={cn(!image && "max-w-3xl")}>
          {eyebrow && (
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {children}
            </div>
          )}
          {actions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          )}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -top-5 -right-5 size-24 rounded-full bg-sun" />
            <Image
              src={image}
              alt={imageAlt}
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 480px, 100vw"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
            />
          </div>
        )}
      </div>
      <BrandStripe />
    </section>
  )
}

export function BrandStripe() {
  return (
    <div aria-hidden className="flex h-2">
      <div className="flex-1 bg-sky" />
      <div className="flex-1 bg-primary" />
      <div className="flex-1 bg-sun" />
    </div>
  )
}

export function Section({
  className,
  tone = "plain",
  id,
  children,
}: {
  className?: string
  tone?: "plain" | "sand"
  id?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20", tone === "sand" && "bg-sand", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({
  title,
  children,
  className,
}: {
  title: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  )
}

export function GoogleForm({
  src,
  title,
  height = 1250,
}: {
  src: string
  title: string
  height?: number
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border">
      <iframe
        src={`${src}?embedded=true`}
        title={title}
        loading="lazy"
        className="block w-full"
        style={{ height }}
      >
        Loading…
      </iframe>
      <p className="border-t px-6 py-4 text-sm text-muted-foreground">
        Having trouble with the form?{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  )
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  )
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}
