import { type Metadata } from 'next'
import { Analytics } from '@/components/Analytics';

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - ITDELTA',
    default: 'ITDELTA - Разработка программного обеспечения, IT консалтинг',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
      <Analytics
          tagID={12345678}
          initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
      >
          <RootLayout>{children}</RootLayout>
      </Analytics>
      </body>
    </html>
  )
}
