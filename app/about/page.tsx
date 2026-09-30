import type { Metadata } from 'next'
import Image from 'next/image'
import { CallJoe } from '@/components/call-link'
import { photos } from '@/content/photos'
import { site } from '@/content/site'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'About Joe',
	'Joe the Roofer LLC is a local family roofing business backed by Covenant Builders. The roofer you actually know by name.',
	'/about',
)

export default function AboutPage() {
	return (
		<div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24'>
			<div>
				<p className='text-sm text-muted-foreground'>The roofer you actually know by name.</p>
				<h1 className='mt-3 font-heading text-5xl text-ink md:text-7xl'>About Joe</h1>
				<div className='mt-8 space-y-5 text-lg leading-relaxed text-foreground/80'>
					<p>
						If your roof has a problem, call Joe. That is the whole idea. You should know who is
						responsible, and you should not have to chase them.
					</p>
					<p>
						{site.name} is a local family roofing business. It is not a call center. {site.covenantName}{' '}
						is the construction backing: resources, project support, and infrastructure when the job
						needs more than a conversation.
					</p>
					<p>
						Personal service. Professional backing. Family is the foundation. Years in business,
						family names, and a biography will be added only when Joe writes them. They are not
						invented here.
					</p>
				</div>
				<div className='mt-8'>
					<CallJoe />
				</div>
			</div>
			<div className='relative min-h-[28rem] overflow-hidden rounded-3xl'>
				<Image src={photos[3].src} alt={photos[3].alt} fill className='object-cover' sizes='(min-width: 768px) 50vw, 100vw' />
			</div>
		</div>
	)
}
