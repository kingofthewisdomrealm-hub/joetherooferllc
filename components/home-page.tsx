import Image from 'next/image'
import Link from 'next/link'
import { CrownMark } from '@/components/crown-mark'
import { CallJoe } from '@/components/call-link'
import { InspectionForm } from '@/components/inspection-form'
import { Reveal } from '@/components/reveal'
import { ReviewList } from '@/components/review-list'
import { ServiceGrid } from '@/components/service-grid'
import { TrustPanel } from '@/components/trust-panel'
import { photos } from '@/content/photos'
import { reviews } from '@/content/reviews'
import { services } from '@/content/services'
import { credentials, site } from '@/content/site'

const steps = [
	['Call Joe', 'Tell him what you noticed. A stain, a drip, a storm, or just a bad feeling.'],
	['Joe gets on the roof', 'He looks at the whole thing and photographs what he finds.'],
	['You get a straight answer', 'Repair it, replace it, watch it, or leave it alone. In plain words.'],
	['You decide', 'If you want the work done, his team does it. No pressure either way.'],
]

const joe = [
	'Answers his own phone',
	'Gets on the roof himself',
	'Shows you photos of what he found',
	'Tells you when it can wait',
]

const covenant = [
	'A Florida certified building contractor',
	'Crews and equipment for bigger jobs',
	'Repairs past the roof: decking, ceilings, walls',
	'The same team from first call to last nail',
]

const homeServices = services.filter((service) => service.slug !== 'residential')

function Rule() {
	return <div className='gold-rule mb-5 w-20' aria-hidden='true' />
}

function Eyebrow({ children }: { children: React.ReactNode }) {
	return <p className='mb-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase'>{children}</p>
}

export function HomePage() {
	return (
		<>
			{/* Hero */}
			<section className='relative min-h-[100svh] overflow-hidden bg-ink text-paper'>
				<Image src={photos[0].src} alt={photos[0].alt} fill priority className='object-cover' sizes='100vw' />
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
						Leak, storm, or just an old roof that worries you? Joe gets on it, shows you photos of what he
						finds, and tells you straight what it needs. Even when the answer is nothing.
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

			{/* The promise */}
			<Reveal>
				<section className='mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32'>
					<div className='flex justify-center'>
						<Rule />
					</div>
					<h2 className='font-heading text-5xl leading-none text-balance text-foreground md:text-6xl'>
						We don&apos;t want to sell you a roof.
						<br />
						<span className='text-gold-grad'>We want to tell you what yours needs.</span>
					</h2>
					<p className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80'>
						Most people call a roofer already braced for a sales pitch. Joe works the other way. If it can be
						repaired, he says so. If it needs replacing, he shows you why. If nothing&apos;s wrong, you hear
						that too.
					</p>
				</section>
			</Reveal>

			{/* Services */}
			<section className='bg-card'>
				<div className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
					<div className='mb-10 flex flex-wrap items-end justify-between gap-6'>
						<div>
							<Rule />
							<h2 className='font-heading text-5xl text-foreground'>What Joe does</h2>
						</div>
						<Link href='/roofing' className='text-sm text-gold-light underline-offset-4 hover:underline'>
							All roofing services →
						</Link>
					</div>
					<ServiceGrid services={homeServices} compact />
				</div>
			</section>

			{/* How it works */}
			<section className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
				<Rule />
				<h2 className='max-w-3xl font-heading text-5xl text-balance text-foreground'>One call. One roofer. One straight answer.</h2>
				<ol className='mt-12 grid gap-4 md:grid-cols-4'>
					{steps.map(([title, body], index) => (
						<li key={title} className='rounded-3xl border border-border bg-card p-6'>
							<span className='font-heading text-4xl text-gold'>{index + 1}</span>
							<h3 className='mt-4 font-heading text-2xl text-foreground'>{title}</h3>
							<p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{body}</p>
						</li>
					))}
				</ol>
			</section>

			{/* Joe + Covenant */}
			<section className='bg-ink text-paper'>
				<div className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
					<Rule />
					<h2 className='max-w-3xl font-heading text-5xl text-balance md:text-6xl'>
						Your neighbor, with a construction company behind him.
					</h2>
					<p className='mt-6 max-w-2xl text-lg text-white/80'>
						When you call, you get Joe. Not a call center, and not a different salesman every visit.
					</p>
					<div className='mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch'>
						<div className='rounded-3xl border border-gold/20 bg-white/5 p-8'>
							<Eyebrow>Joe the Roofer</Eyebrow>
							<ul className='mt-4 space-y-3 text-lg'>
								{joe.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div className='flex items-center justify-center font-heading text-4xl text-gold'>+</div>
						<div className='rounded-3xl border border-gold/20 bg-white/5 p-8'>
							<Eyebrow>{site.covenantName}</Eyebrow>
							<ul className='mt-4 space-y-3 text-lg'>
								{covenant.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
					<p className='mt-10 max-w-3xl text-lg leading-relaxed text-white/80'>
						If the problem stops at the shingles, Joe handles it. If the water already got into the decking or
						the ceiling, {site.covenantName} is already on the job. You don&apos;t start over with a stranger.
					</p>
					<Link href='/about' className='mt-6 inline-block text-gold-light underline-offset-4 hover:underline'>
						About Joe →
					</Link>
				</div>
			</section>

			{/* Storm banner */}
			<section className='mx-auto max-w-6xl px-5 py-24 md:px-8'>
				<div className='grid items-center gap-8 rounded-3xl border border-gold/30 bg-gradient-to-br from-card to-ink p-8 md:grid-cols-[1.4fr_1fr] md:p-12'>
					<div>
						<Eyebrow>Storm came through?</Eyebrow>
						<h2 className='font-heading text-4xl text-foreground md:text-5xl'>
							Your house isn&apos;t another claim number.
						</h2>
						<p className='mt-4 max-w-xl text-foreground/80'>
							The worst damage is usually the part you can&apos;t see from the driveway. Joe gets on the roof,
							photographs what he finds, and you decide what to do next.
						</p>
					</div>
					<div className='flex md:justify-end'>
						<Link
							href='/storm-damage'
							className='inline-flex h-12 items-center rounded-full btn-gold px-6 font-semibold'
						>
							Check My Roof After a Storm
						</Link>
					</div>
				</div>
			</section>

			{/* Photos */}
			<section className='mx-auto max-w-6xl px-5 pb-24 md:px-8'>
				<Rule />
				<h2 className='font-heading text-5xl text-foreground'>Real roofs. No stock photos.</h2>
				<div className='mt-8 grid grid-cols-2 gap-3 md:grid-cols-4'>
					{photos.slice(1, 5).map((photo) => (
						<div key={photo.src} className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
							<Image src={photo.src} alt={photo.alt} fill className='object-cover' sizes='(min-width: 768px) 25vw, 50vw' />
						</div>
					))}
				</div>
				<Link href='/projects' className='mt-6 inline-block text-sm text-gold-light underline-offset-4 hover:underline'>
					More roofs →
				</Link>
			</section>

			{reviews.length || credentials.length ? (
				<section className='mx-auto max-w-6xl space-y-8 px-5 pb-24 md:px-8'>
					<ReviewList />
					<TrustPanel />
				</section>
			) : null}

			{/* Inspection form */}
			<section className='bg-card'>
				<div className='mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8'>
					<div>
						<Rule />
						<h2 className='font-heading text-5xl text-foreground'>Have Joe check your roof.</h2>
						<p className='mt-4 text-muted-foreground'>
							Name, phone, email, address, and what&apos;s going on. That&apos;s it. Joe calls you back.
						</p>
					</div>
					<InspectionForm />
				</div>
			</section>
		</>
	)
}
