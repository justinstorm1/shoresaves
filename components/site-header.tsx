"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { nav } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Shore Saves"
            width={1002}
            height={849}
            className="h-10 w-auto"
            preload
          />
          <span className="sr-only">Shore Saves Animal Rescue</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                isActive(item.href) && "text-primary hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className={cn(
              buttonVariants(),
              "ml-3 h-10 rounded-full px-5 text-sm font-semibold"
            )}
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background px-4 pt-2 pb-6 md:hidden"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false)
          }}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block border-b border-border/50 py-3 text-base font-medium",
                isActive(item.href) && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className={cn(
              buttonVariants(),
              "mt-5 h-11 w-full rounded-full text-base font-semibold"
            )}
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  )
}
