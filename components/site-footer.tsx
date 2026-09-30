import Link from 'next/link'
import { navItems } from '@/content/navigation'
import { regions } from '@/content/regions'
import { site } from '@/content/site'
import { hasPhone } from '@/lib/contact'

export function SiteFooter() {
	return (
		<footer className='border-t border-border bg-ink text-paper'>
			<div className='mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.3fr_1fr_1fr]'>
				<div>
					<p className='font-heading text-4xl leading-none'>Roof problem?</p>
					<p className='font-heading text-4xl leading-none text-sand'>Call Joe.</p>
					<p className='mt-6 max-w-sm text-sm text-white/70'>
						{site.name}. Your local roofer, backed by {site.covenantName}.
					</p>
					<div className='mt-6 space-y-2 text-sm'>
						{hasPhone() ? <p>{site.phone}</p> : null}
						{site.email ? (
							<a className='underline-offset-4 hover:underline' href={`mailto:${site.email}`}>
								{site.email}
							</a>
						) : null}
						<Link className='block underline-offset-4 hover:underline' href='/contact#inspection'>
							Contact form
						</Link>
					</div>
				</div>
				<div>
					<p className='text-xs tracking-[0.18em] text-white/50 uppercase'>Visit</p>
					<ul className='mt-4 space-y-2 text-sm'>
						{navItems.map((item) => (
							<li key={item.href}>
								<Link className='text-white/80 hover:text-white' href={item.href}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className='text-xs tracking-[0.18em] text-white/50 uppercase'>Service areas</p>
					<ul className='mt-4 space-y-2 text-sm'>
						{regions.map((region) => (
							<li key={region.slug}>
								<Link className='text-white/80 hover:text-white' href={`/${region.slug}`}>
									{region.name}
								</Link>
							</li>
						))}
						<li>
							<Link className='text-white/80 hover:text-white' href='/service-areas'>
								All cities
							</Link>
						</li>
					</ul>
					<div className='mt-6 space-y-2 text-sm text-white/70'>
						{site.facebookUrl ? (
							<a href={site.facebookUrl} className='block hover:text-white'>
								Facebook
							</a>
						) : null}
						{site.instagramUrl ? (
							<a href={site.instagramUrl} className='block hover:text-white'>
								Instagram
							</a>
						) : null}
						{site.covenantUrl ? (
							<a href={site.covenantUrl} className='block hover:text-white'>
								{site.covenantName}
							</a>
						) : (
							<p>Backed by {site.covenantName}</p>
						)}
					</div>
				</div>
			</div>
			<div className='border-t border-white/10'>
				<div className='mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-8'>
					<p>
						{site.name}. Family owned. Professionally backed.
					</p>
					<div className='flex gap-4'>
						<Link href='/privacy'>Privacy</Link>
						<Link href='/terms'>Terms</Link>
						<Link href='/accessibility'>Accessibility</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
