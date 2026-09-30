import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaqList } from '@/components/faq-list'
import { InspectionForm } from '@/components/inspection-form'
import { JsonLd } from '@/components/json-ld'
import { getLocation } from '@/content/locations'
import { getRegion, regions } from '@/content/regions'
import { pageMeta } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'

export const dynamicParams = false

export function generateStaticParams() {
	return regions.map((region) => ({ region: region.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ region: string }>
}): Promise<Metadata> {
	const { region: slug } = await params
	const region = getRegion(slug)
	if (!region) return {}
	return pageMeta(region.title, region.description, `/${region.slug}`)
}

export default async function RegionPage({
	params,
}: {
	params: Promise<{ region: string }>
}) {
	const { region: slug } = await params
	const region = getRegion(slug)
	if (!region) notFound()

	return (
		<>
			<JsonLd data={faqSchema(region.faqs)} />
			<div className='mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
				<p className='text-sm text-muted-foreground'>{region.counties.join(' · ')}</p>
				<h1 className='mt-3 max-w-3xl font-heading text-5xl text-ink md:text-7xl'>{region.title}</h1>
				<p className='mt-6 max-w-2xl text-lg text-foreground/80'>{region.intro}</p>
				<p className='mt-4 max-w-2xl text-foreground/80'>{region.detail}</p>
				<p className='mt-4 max-w-2xl text-muted-foreground'>{region.weather}</p>
				<h2 className='mt-14 font-heading text-4xl text-ink'>Cities</h2>
				<ul className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
					{region.citySlugs.map((citySlug) => {
						const location = getLocation(citySlug)
						if (!location) return null
						return (
							<li key={citySlug} className='rounded-2xl bg-card px-4 py-3'>
								<Link href={`/roofing/${location.slug}`} className='font-medium hover:underline'>
									{location.name}
								</Link>
								<p className='text-sm text-muted-foreground'>{location.county}</p>
							</li>
						)
					})}
				</ul>
				<div className='mt-14 grid gap-8 md:grid-cols-2'>
					<FaqList faqs={region.faqs} />
					<InspectionForm />
				</div>
			</div>
		</>
	)
}
