import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { InspectionForm } from '@/components/inspection-form'
import { photos } from '@/content/photos'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Storm damage roof inspection',
	'After wind, hail, or a hard Florida storm, Joe inspects the roof, documents what is found, and gives you clear options.',
	'/storm-damage',
)

const steps = [
	['A storm occurred.', 'Wind, hail, or a night of sideways rain. You do not have to diagnose it from the driveway.'],
	['Damage may be hidden.', 'Missing shingles are the obvious part. Lifted edges, open flashing, and bruised decks are not.'],
	['Joe inspects the property.', 'The check happens on the roof, with the address and what you saw after the weather.'],
	['Joe documents what is found.', 'You should be able to see the condition, not just hear a pitch.'],
	['You get clear options.', 'Repair, replacement, keep an eye on it, or do nothing. No insurance promise is attached to that list.'],
]

export default function StormPage() {
	return (
		<>
			<section className='relative min-h-[70vh] bg-ink text-paper'>
				<Image src={photos[2].src} alt={photos[2].alt} fill priority className='object-cover opacity-60' sizes='100vw' />
				<div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30' />
				<div className='relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8'>
					<p className='text-sm text-white/75'>Storm came through? Let&apos;s check the roof.</p>
					<h1 className='mt-4 max-w-3xl font-heading text-5xl leading-none md:text-7xl'>
						Your house isn&apos;t another claim number.
					</h1>
					<Link
						href='#inspection'
						className='mt-8 inline-flex h-12 w-fit items-center rounded-full bg-white px-6 text-ink'
					>
						Check My Roof
					</Link>
				</div>
			</section>
			<section className='mx-auto max-w-3xl px-5 py-20 md:px-8'>
				<ol className='space-y-8'>
					{steps.map(([title, body], index) => (
						<li key={title}>
							<p className='font-heading text-3xl text-ink'>
								{index + 1}. {title}
							</p>
							<p className='mt-2 text-muted-foreground'>{body}</p>
						</li>
					))}
				</ol>
				<p className='mt-10 text-lg'>Roof problem? Call Joe.</p>
			</section>
			<section id='inspection' className='mx-auto max-w-3xl px-5 pb-24 md:px-8'>
				<InspectionForm />
			</section>
		</>
	)
}
