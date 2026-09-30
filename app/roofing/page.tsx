import type { Metadata } from 'next'
import { InspectionForm } from '@/components/inspection-form'
import { ServiceGrid } from '@/components/service-grid'
import { services } from '@/content/services'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Roofing services',
	'Roof inspections, repair, replacement, storm damage, emergency roofing, and residential work. Commercial roofs when the job needs Covenant Builders behind Joe.',
	'/roofing',
)

export default function RoofingPage() {
	return (
		<div className='mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
			<p className='text-sm text-muted-foreground'>Roof problem? Call Joe.</p>
			<h1 className='mt-3 max-w-3xl font-heading text-5xl text-ink md:text-7xl'>
				The roof work, said plainly.
			</h1>
			<p className='mt-6 max-w-2xl text-lg text-foreground/80'>
				Inspections, repairs, replacements, and storm checks for homeowners. If a property needs a
				larger crew, Covenant Builders is the construction backing. Joe stays the person you talk to.
			</p>
			<div className='mt-12'>
				<ServiceGrid services={services} />
			</div>
			<div className='mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]'>
				<div>
					<h2 className='font-heading text-4xl text-ink'>Not sure which one you need?</h2>
					<p className='mt-3 text-muted-foreground'>That is a normal place to start. Tell Joe what happened.</p>
				</div>
				<InspectionForm />
			</div>
		</div>
	)
}
