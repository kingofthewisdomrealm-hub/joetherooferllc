import type { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '@/content/locations'
import { regions } from '@/content/regions'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Service areas',
	'Joe the Roofer LLC serves Florida’s Space Coast, Treasure Coast, and Central Florida, from Orlando to the beaches.',
	'/service-areas',
)

export default function ServiceAreasPage() {
	return (
		<div className='mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
			<h1 className='font-heading text-5xl text-ink md:text-7xl'>Service areas</h1>
			<p className='mt-4 max-w-2xl text-lg text-muted-foreground'>
				Orlando to the Space Coast to the Treasure Coast. Each city page is written for that place.
				Counties are covered on the regional pages, not as extra copies of the same paragraph.
			</p>
			<div className='mt-12 grid gap-8'>
				{regions.map((region) => (
					<section key={region.slug} className='rounded-3xl border border-border bg-card p-6 md:p-8'>
						<div className='flex flex-wrap items-end justify-between gap-3'>
							<h2 className='font-heading text-4xl text-ink'>{region.name}</h2>
							<Link className='underline-offset-4 hover:underline' href={`/${region.slug}`}>
								{region.title}
							</Link>
						</div>
						<p className='mt-2 text-sm text-muted-foreground'>{region.counties.join(' · ')}</p>
						<ul className='mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
							{region.citySlugs.map((slug) => {
								const location = locations.find((item) => item.slug === slug)
								if (!location) return null
								return (
									<li key={slug}>
										<Link className='hover:underline' href={`/roofing/${slug}`}>
											{location.name}
										</Link>
									</li>
								)
							})}
						</ul>
					</section>
				))}
			</div>
		</div>
	)
}
