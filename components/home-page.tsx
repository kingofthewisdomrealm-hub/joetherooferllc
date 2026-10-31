import Image from 'next/image'
import Link from 'next/link'
import { CrownMark } from '@/components/crown-mark'
import { CallJoe } from '@/components/call-link'
import { InspectionForm } from '@/components/inspection-form'
import { ProjectGallery } from '@/components/project-gallery'
import { Reveal } from '@/components/reveal'
import { ReviewList } from '@/components/review-list'
import { ServiceGrid } from '@/components/service-grid'
import { TrustPanel } from '@/components/trust-panel'
import { photos } from '@/content/photos'
import { regions } from '@/content/regions'
import { services } from '@/content/services'
import { site } from '@/content/site'

const moments = [
	['Roof leaking?', 'Call Joe.'],
	['Storm just came through?', 'Call Joe.'],
	['Not sure if you need a new roof?', 'Call Joe.'],
	['Want a second opinion?', 'Call Joe.'],
]

const steps = [
	['1 — Call Joe', 'Tell us what is happening.'],
	['2 — Joe checks the roof', 'We inspect and document the condition.'],
	['3 — Get clear options', 'Understand what needs repair, replacement, monitoring, or no work at all.'],
	['4 — We handle the roofing', 'If work is needed, our team gets it done.'],
]

const stormSteps = [
	'A storm occurred.',
	'The roof may have damage that is not obvious from the ground.',
	'Joe can inspect the property.',
	'Joe documents what is found.',
	'You get clear options for what to do next.',
]

export function HomePage() {
	return (
		<>
			<section className='relative min-h-[100svh] overflow-hidden bg-ink text-paper'>
				<Image
					src={photos[0].src}
					alt={photos[0].alt}
					fill
					priority
					className='object-cover'
					sizes='100vw'
				/>
				<div className='sunset-glow absolute inset-0' />
				<div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25' />
				<div className='absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent' />
				<div className='relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-28 pb-28 md:px-8 md:pb-24'>
					<div className='flex items-center gap-3'>
						<CrownMark className='h-8 w-9 text-gold' />
						<div className='gold-rule w-24' />
					</div>
					<p className='mt-4 text-xs font-semibold tracking-[0.3em] text-gold-light uppercase'>
						Joe the Roofer LLC · Backed by {site.covenantName}
					</p>
					<h1 className='mt-5 max-w-4xl font-heading text-6xl leading-[0.9] font-semibold md:text-8xl'>
						Your roofer.
						<br />
						Your neighbor.
						<br />
						<span className='text-gold-grad'>Joe.</span>
					</h1>
					<p className='mt-6 max-w-xl text-lg text-white/85'>
						Family-owned roofing with the experience and resources of {site.covenantName} behind
						every job.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
						<Link
							href='/#inspection'
							className='inline-flex h-12 items-center justify-center rounded-full btn-gold px-6 text-base font-semibold'
						>
							Get a Free Roof Inspection
						</Link>
						<CallJoe variant='onDark' />
					</div>
				</div>
			</section>

			<Reveal>
				<section className='mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[1fr_1fr] md:px-8 md:py-32'>
					<div>
						<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl leading-none text-foreground md:text-6xl'>
							Big-company capability.
							<br />
							Family-business attention.
						</h2>
					</div>
					<div className='space-y-5 text-lg leading-relaxed text-foreground/80'>
						<p>
							Joe the Roofer was built around a simple idea: homeowners shouldn&apos;t have to chase
							their roofer. You should know who you&apos;re calling, who&apos;s helping you, and
							who&apos;s responsible for getting the job done.
						</p>
						<p>
							Joe the Roofer LLC is backed by {site.covenantName}, giving our customers the personal
							attention of a family business with the construction resources needed to handle the job
							correctly.
						</p>
						<p className='text-foreground'>You don&apos;t need another salesperson. You need a roofer you can call.</p>
					</div>
				</section>
			</Reveal>

			<section className='bg-card'>
				<div className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
					<div className='mb-10 flex items-end justify-between gap-6'>
						<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl text-foreground'>The work</h2>
						<Link href='/roofing' className='text-sm underline-offset-4 hover:underline'>
							Roofing services
						</Link>
					</div>
					<ServiceGrid services={services} />
				</div>
			</section>

			<section className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
				<div className='grid gap-4 md:grid-cols-2'>
					{moments.map(([prompt, line]) => (
						<div key={prompt} className='rounded-3xl border border-gold/25 bg-gradient-to-br from-card to-ink px-8 py-10 text-paper shadow-[0_20px_60px_-30px_rgb(201_162_90_/_0.45)]'>
							<p className='text-white/70'>{prompt}</p>
							<p className='mt-3 font-heading text-5xl font-semibold'><span className='text-gold-grad'>{line}</span></p>
						</div>
					))}
				</div>
			</section>

			<section className='mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-8'>
				<div className='relative aspect-[4/3] overflow-hidden rounded-3xl'>
					<Image src={photos[1].src} alt={photos[1].alt} fill className='object-cover' sizes='(min-width: 768px) 50vw, 100vw' />
				</div>
				<Reveal>
					<p className='text-sm font-semibold tracking-[0.25em] text-gold uppercase'>Family business</p>
					<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='mt-3 font-heading text-5xl leading-none text-foreground'>
						Roofing is the business.
						<br />
						Family is the foundation.
					</h2>
					<p className='mt-6 text-lg leading-relaxed text-foreground/80'>
						Joe the Roofer is built around relationships, reputation, accountability, and treating
						homeowners like neighbors rather than job numbers.
					</p>
					<p className='mt-4 text-muted-foreground'>
						The roofer you actually know by name. Family photos will be added when Joe provides them.
						Until then, the pictures on this site are real roofs, not a stock family.
					</p>
					<Link href='/about' className='mt-6 inline-block underline-offset-4 hover:underline'>
						About Joe
					</Link>
				</Reveal>
			</section>

			<section className='bg-ink text-paper'>
				<div className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
					<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl md:text-6xl'>Backed by {site.covenantName}</h2>
					<div className='mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch'>
						<div className='rounded-3xl bg-white/10 p-8'>
							<p className='text-xs font-semibold tracking-[0.25em] text-gold uppercase'>Joe the Roofer</p>
							<ul className='mt-6 space-y-3 text-lg'>
								<li>Personal relationship</li>
								<li>Roofing specialist</li>
								<li>Local contact</li>
								<li>Customer communication</li>
							</ul>
						</div>
						<div className='flex items-center justify-center font-heading text-4xl text-sand'>+</div>
						<div className='rounded-3xl bg-white/10 p-8'>
							<p className='text-xs font-semibold tracking-[0.25em] text-gold uppercase'>{site.covenantName}</p>
							<ul className='mt-6 space-y-3 text-lg'>
								<li>Construction resources</li>
								<li>Project support</li>
								<li>Experience</li>
								<li>Infrastructure</li>
							</ul>
						</div>
					</div>
					<div className='mt-8 rounded-3xl border border-gold/40 bg-card px-8 py-10 text-foreground'>
						<p className='text-sm font-semibold tracking-[0.25em] text-gold uppercase'>The best of both worlds</p>
						<p className='mt-3 font-heading text-4xl md:text-5xl'>
							Personal attention with professional backing.
						</p>
						<p className='mt-4 max-w-2xl text-foreground/80'>
							Personal service. Professional backing. Family owned. Professionally backed.
						</p>
						{site.covenantUrl ? (
							<a className='mt-6 inline-block underline-offset-4 hover:underline' href={site.covenantUrl}>
								{site.covenantName}
							</a>
						) : null}
					</div>
				</div>
			</section>

			<section className='mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8'>
				<div>
					<p className='text-sm text-muted-foreground'>Storm came through? Let&apos;s check the roof.</p>
					<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='mt-3 font-heading text-5xl text-foreground'>Your house isn&apos;t another claim number.</h2>
					<ol className='mt-8 space-y-4'>
						{stormSteps.map((step, index) => (
							<li key={step} className='flex gap-4'>
								<span className='font-heading text-2xl text-gold'>{index + 1}</span>
								<span className='pt-1'>{step}</span>
							</li>
						))}
					</ol>
					<Link
						href='/storm-damage'
						className='mt-8 inline-flex h-12 items-center rounded-full bg-primary px-6 text-primary-foreground'
					>
						Check My Roof
					</Link>
				</div>
				<div className='relative min-h-80 overflow-hidden rounded-3xl'>
					<Image src={photos[4].src} alt={photos[4].alt} fill className='object-cover' sizes='(min-width: 768px) 50vw, 100vw' />
				</div>
			</section>

			<section className='bg-card'>
				<div className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
					<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='max-w-3xl font-heading text-5xl text-foreground'>One call. One roofer. One answer.</h2>
					<div className='mt-10 grid gap-4 md:grid-cols-4'>
						{steps.map(([title, body], index) => (
							<div key={title} className='rounded-3xl bg-background p-5'>
								<div className='relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl'>
									<Image
										src={photos[index % photos.length].src}
										alt={photos[index % photos.length].alt}
										fill
										className='object-cover'
										sizes='(min-width: 768px) 25vw, 100vw'
									/>
								</div>
								<h3 className='font-heading text-2xl text-foreground'>{title}</h3>
								<p className='mt-2 text-sm text-muted-foreground'>{body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32'>
				<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl leading-none text-foreground md:text-6xl'>
					We don&apos;t want to sell you a roof.
					<br />
					We want to tell you what your roof actually needs.
				</h2>
				<p className='mx-auto mt-8 max-w-2xl text-lg text-foreground/80'>
					Repair it if it can be repaired. Replace it when replacement makes sense. If nothing needs
					to be done, Joe will say that too.
				</p>
			</section>

			<section className='mx-auto max-w-6xl px-5 pb-24 md:px-8'>
				<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl text-foreground'>Roofs</h2>
				<div className='mt-8'>
					<ProjectGallery />
				</div>
			</section>

			<section className='mx-auto max-w-6xl px-5 pb-24 md:px-8'>
				<ReviewList />
				<div className='mt-8'>
					<TrustPanel />
				</div>
			</section>

			<section className='bg-muted/40'>
				<div className='mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8' id='inspection'>
					<div>
						<div className='gold-rule mb-5 w-20' aria-hidden='true' />
<h2 className='font-heading text-5xl text-foreground'>Have Joe check the roof.</h2>
						<p className='mt-4 text-muted-foreground'>
							Name, phone, email, the address, and what happened. That is the whole form.
						</p>
						<ul className='mt-8 space-y-2 text-sm'>
							{regions.map((region) => (
								<li key={region.slug}>
									<Link className='underline-offset-4 hover:underline' href={`/${region.slug}`}>
										{region.name} roofing
									</Link>
								</li>
							))}
						</ul>
					</div>
					<InspectionForm />
				</div>
			</section>
		</>
	)
}
