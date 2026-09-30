import type { Metadata } from 'next'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Terms',
	'Using the Joe the Roofer LLC website and inspection request form.',
	'/terms',
)

export default function TermsPage() {
	return (
		<div className='mx-auto max-w-3xl space-y-4 px-5 py-16 text-lg leading-relaxed md:px-8 md:py-24'>
			<h1 className='font-heading text-5xl text-ink'>Terms</h1>
			<p>
				The pages on this site explain how to reach Joe the Roofer LLC and what kinds of roofing work
				the company does. They are not a contract, a quote, or a promise about insurance.
			</p>
			<p>
				An inspection request is a request for contact. Work begins only when you and Joe agree to it.
				Licenses, warranties, and certifications are listed only when they are published on the site.
			</p>
		</div>
	)
}
