import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: "Shore Saves Animal Rescue | Freehold, NJ",
    template: "%s | Shore Saves Animal Rescue",
  },
  description:
    "A 100% volunteer-run, donor-funded non-profit rescuing, rehabilitating, and rehoming at-risk dogs at the Jersey Shore. Adopt, foster, volunteer, or donate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, bricolage.variable)}
    >
      <body>
        <ThemeProvider forcedTheme="light">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
