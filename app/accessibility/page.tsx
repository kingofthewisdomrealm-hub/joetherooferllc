import type { Metadata } from 'next'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Accessibility',
	'Accessibility notes for the Joe the Roofer LLC website.',
	'/accessibility',
)

export default function AccessibilityPage() {
	return (
		<div className='mx-auto max-w-3xl space-y-4 px-5 py-16 text-lg leading-relaxed md:px-8 md:py-24'>
			<h1 className='font-heading text-5xl text-ink'>Accessibility</h1>
			<p>
				The site is built to work on a phone, with visible text, labeled form fields, and a way to
				skip to the content. Motion is reduced when your device asks for that.
			</p>
			<p>
				If a page gets in your way, use the contact form and say which page and what happened. Joe
				the Roofer LLC will treat that as something to fix.
			</p>
		</div>
	)
}
