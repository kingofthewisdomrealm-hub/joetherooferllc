import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InspectionForm } from '@/components/inspection-form'
import { storms } from '@/content/storms'
import { pageMeta } from '@/lib/metadata'

export const dynamicParams = false

export function generateStaticParams() {
	return storms.map((storm) => ({ slug: storm.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const storm = storms.find((item) => item.slug === slug)
	if (!storm) return {}
	return pageMeta(storm.name, storm.summary, `/storms/${storm.slug}`)
}

export default async function StormEventPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const storm = storms.find((item) => item.slug === slug)
	if (!storm) notFound()

	return (
		<div className='mx-auto max-w-3xl px-5 py-16 md:px-8'>
			<p className='text-sm text-muted-foreground'>{storm.date}</p>
			<h1 className='mt-3 font-heading text-5xl text-ink'>{storm.name}</h1>
			<p className='mt-6 text-lg'>{storm.summary}</p>
			<ul className='mt-6 list-disc space-y-2 pl-5'>
				{storm.whatToLookFor.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<div className='mt-10'>
				<InspectionForm />
			</div>
		</div>
	)
}
