import type { Metadata } from 'next'
import { HomePage } from '@/components/home-page'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = {
	...pageMeta(
		'Joe the Roofer LLC | Your local Florida roofer',
		'Family-owned roofing for the Space Coast, Treasure Coast, and Central Florida. If your roof has a problem, call Joe. Backed by Covenant Builders.',
		'/',
	),
	title: {
		absolute: 'Joe the Roofer LLC | Your local Florida roofer',
	},
}

export default function Page() {
	return <HomePage />
}
