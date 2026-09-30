import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocationView } from '@/components/location-view'
import { JsonLd } from '@/components/json-ld'
import { getLocation, locations } from '@/content/locations'
import { pageMeta } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'

export const dynamicParams = false

export function generateStaticParams() {
	return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const location = getLocation(slug)
	if (!location) return {}
	return pageMeta(`${location.name} roofer`, location.description, `/roofing/${location.slug}`)
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const location = getLocation(slug)
	if (!location) notFound()

	return (
		<>
			<JsonLd data={faqSchema(location.faqs)} />
			<LocationView location={location} />
		</>
	)
}
