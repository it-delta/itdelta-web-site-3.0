import {type Metadata} from 'next'
import {Analytics} from '@/components/Analytics';
import { Analytics as Analitics_Vercel } from "@vercel/analytics/next"
import Script from 'next/script';
import {RootLayout} from '@/components/RootLayout'

import '@/styles/tailwind.css'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
    title: {
        template: '%s - ITDELTA',
        default: 'ITDELTA - Разработка программного обеспечения, web-приложений, IT консалтинг',
    },
    other: {
        'yandex-verification': '68030eb015a67d08',
    }
}

export default function Layout({children}: { children: React.ReactNode }) {
    const prod = process.env.NODE_ENV === 'production';
    console.log(`Start app... (${process.env.NODE_ENV} mode)`);
    return (
        <html lang="ru" className="h-full bg-neutral-950 text-base antialiased">
        {prod && <Script src="https://code.jivo.ru/widget/PWVDc47MVr"/>}
        <body className="flex min-h-full flex-col">
        <NextTopLoader showSpinner={false}/>
        {prod ?
            <>
                <Analitics_Vercel />
                <Analytics
                    tagID={process.env.NEXT_PUBLIC_YANDEX_METRICA_ID ?? ''}
                    initParameters={{clickmap: true, trackLinks: true, accurateTrackBounce: true}}
                >
                    <RootLayout>{children}</RootLayout>                    
                </Analytics>
            </>
            :
            <RootLayout>{children}</RootLayout>
        }
        </body>
        </html>
    )
}
