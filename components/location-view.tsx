import Image from 'next/image'
import Link from 'next/link'
import { InspectionForm } from '@/components/inspection-form'
import { CallJoe } from '@/components/call-link'
import { FaqList } from '@/components/faq-list'
import { Reveal } from '@/components/reveal'
import { ServiceGrid } from '@/components/service-grid'
import { services } from '@/content/services'
import { nearbyLocations, type Location } from '@/content/locations'
import { photos } from '@/content/photos'

export function LocationView({ location }: { location: Location }) {
	const nearby = nearbyLocations(location.nearby)
	const photo = photos[location.name.length % photos.length]

	return (
		<article>
			<section className='relative min-h-[70vh] overflow-hidden bg-ink text-paper'>
				<Image
					src={photo.src}
					alt={photo.alt}
					fill
					priority
					className='object-cover opacity-50'
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25' />
				<div className='relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8'>
					<p className='text-sm text-white/75'>
						{location.county} · Joe the Roofer LLC — Backed by Covenant Builders
					</p>
					<h1 className='mt-4 max-w-3xl font-heading text-5xl leading-none md:text-7xl'>
						{location.name} roofer.
					</h1>
					<p className='mt-6 max-w-2xl text-lg text-white/85'>{location.intro}</p>
					<div className='mt-8 flex flex-wrap gap-3'>
						<CallJoe variant='onDark' />
						<Link
							href='/contact#inspection'
							className='inline-flex h-12 items-center rounded-full bg-white px-6 text-ink'
						>
							Check My Roof
						</Link>
					</div>
				</div>
			</section>
			<Reveal>
				<section className='mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8'>
					<div>
						<h2 className='font-heading text-4xl text-ink'>The houses here</h2>
						<p className='mt-4 leading-relaxed text-muted-foreground'>{location.housing}</p>
					</div>
					<div>
						<h2 className='font-heading text-4xl text-ink'>The weather</h2>
						<p className='mt-4 leading-relaxed text-muted-foreground'>{location.weather}</p>
					</div>
				</section>
			</Reveal>
			<section className='bg-card'>
				<div className='mx-auto max-w-6xl px-5 py-20 md:px-8'>
					<h2 className='font-heading text-4xl text-ink'>What Joe looks for in {location.name}</h2>
					<ul className='mt-8 grid gap-3'>
						{location.issues.map((issue) => (
							<li key={issue} className='rounded-2xl bg-background px-5 py-4'>
								{issue}
							</li>
						))}
					</ul>
					<div className='mt-12'>
						<ServiceGrid services={services.slice(0, 4)} />
					</div>
				</div>
			</section>
			<section className='mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1fr] md:px-8'>
				<div>
					<h2 className='font-heading text-4xl text-ink'>Nearby</h2>
					<ul className='mt-6 space-y-3'>
						{nearby.map((item) => (
							<li key={item.slug}>
								<Link className='text-lg underline-offset-4 hover:underline' href={`/roofing/${item.slug}`}>
									{item.name} roofing
								</Link>
							</li>
						))}
						<li>
							<Link className='text-lg underline-offset-4 hover:underline' href='/service-areas'>
								All service areas
							</Link>
						</li>
					</ul>
				</div>
				<FaqList faqs={location.faqs} />
			</section>
			<section className='bg-muted/50'>
				<div className='mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8'>
					<div>
						<h2 className='font-heading text-4xl text-ink'>Roof problem in {location.name}?</h2>
						<p className='mt-4 text-muted-foreground'>Call Joe.</p>
					</div>
					<InspectionForm />
				</div>
			</section>
		</article>
	)
}
