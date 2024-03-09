import { type Metadata } from 'next'
import { Analytics } from '@/components/Analytics';
import Script from 'next/script';
import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - ITDELTA',
    default: 'ITDELTA - Разработка программного обеспечения, IT консалтинг',
  },
  other: {
    'yandex-verification': '68030eb015a67d08',
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <Script src="https://code.jivo.ru/widget/PWVDc47MVr"/>
      <body className="flex min-h-full flex-col">
      <Analytics
          tagID={96145741}
          initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
      >
          <RootLayout>{children}</RootLayout>
      </Analytics>
      </body>
    </html>
  )
}
