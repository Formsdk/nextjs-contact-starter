import "./global.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Next.js x FormsDK Starter',
  description: 'Contact form starter with FormsDK and NeonDB.',
}

const cx = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(GeistSans.variable)}>
      <Analytics />
      <body className="antialiased min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {children}
      </body>
    </html>
  )
}
