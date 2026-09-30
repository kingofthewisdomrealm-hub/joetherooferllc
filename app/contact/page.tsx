import type { Metadata } from 'next'
import { CallJoe } from '@/components/call-link'
import { InspectionForm } from '@/components/inspection-form'
import { site } from '@/content/site'
import { hasPhone } from '@/lib/contact'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Contact Joe',
	'Request a roof inspection or call Joe the Roofer LLC. Family-owned roofing backed by Covenant Builders.',
	'/contact',
)

export default function ContactPage() {
	return (
		<div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24'>
			<div>
				<h1 className='font-heading text-5xl text-ink md:text-7xl'>Contact</h1>
				<p className='mt-4 text-lg text-muted-foreground'>
					Roof problem? Call Joe. If a number is not published yet, the form is the way to reach him.
				</p>
				<div className='mt-8 space-y-3'>
					<CallJoe />
					{hasPhone() ? <p>{site.phone}</p> : null}
					{site.email ? (
						<a className='block underline-offset-4 hover:underline' href={`mailto:${site.email}`}>
							{site.email}
						</a>
					) : null}
				</div>
			</div>
			<InspectionForm />
		</div>
	)
}
