import type { Metadata } from 'next'
import { Fraunces, Geist } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/content/site'
import { roofingBusinessSchema } from '@/lib/schema'
import './globals.css'

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
})

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
})

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: 'Joe the Roofer LLC | Your local Florida roofer',
		template: '%s | Joe the Roofer LLC',
	},
	description: site.description,
	openGraph: {
		title: 'Joe the Roofer LLC',
		description: site.description,
		siteName: site.name,
		images: [
			{
				url: '/images/two-story.jpg',
				alt: 'A two-story Florida house with a dark shingle roof and palm trees',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='en' className={`${geist.variable} ${fraunces.variable} h-full antialiased`}>
			<body className='min-h-full bg-background pb-24 text-foreground md:pb-0'>
				<a
					href='#main'
					className='sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2'
				>
					Skip to content
				</a>
				<JsonLd data={roofingBusinessSchema()} />
				<SiteHeader />
				<main id='main'>{children}</main>
				<SiteFooter />
				<MobileActionBar />
			</body>
		</html>
	)
}
