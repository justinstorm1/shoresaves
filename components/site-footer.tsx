import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { FacebookIcon, InstagramIcon } from "@/components/site"
import { footerNav, links } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Shore Saves home">
            <Image
              src="/logo.png"
              alt="Shore Saves"
              width={1002}
              height={849}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A 100% volunteer-run, donor-funded animal rescue in Monmouth County,
            New Jersey.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            501(c)(3) non-profit · EIN 87-2687524
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-muted-foreground md:grid-cols-1">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="size-4" />
                {links.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${links.phone}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="size-4" />
                {links.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <FacebookIcon className="size-4" />
                facebook.com/shoresaves
              </a>
            </li>
            <li>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <InstagramIcon className="size-4" />
                instagram.com/shoresaves
              </a>
            </li>
            <li className="pt-2">
              Donation checks:
              <br />
              PO Box 7, Farmingdale, NJ 07727
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Shore Saves Animal Rescue. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
