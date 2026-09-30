import {
	Building2,
	CloudLightning,
	House,
	Search,
	Siren,
	Wrench,
	Home,
} from 'lucide-react'
import type { Service } from '@/content/services'

const icons = {
	search: Search,
	wrench: Wrench,
	home: Home,
	cloud: CloudLightning,
	siren: Siren,
	house: House,
	building: Building2,
}

export function ServiceGrid({ services }: { services: Service[] }) {
	return (
		<div className='grid gap-4 md:grid-cols-2'>
			{services.map((service) => {
				const Icon = icons[service.icon]
				return (
					<article
						key={service.slug}
						id={service.slug}
						className='rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'
					>
						<Icon className='text-cedar' aria-hidden='true' />
						<h3 className='mt-5 font-heading text-3xl text-ink'>{service.title}</h3>
						<p className='mt-3 text-base leading-relaxed text-foreground/80'>{service.summary}</p>
						<p className='mt-3 text-sm leading-relaxed text-muted-foreground'>{service.body}</p>
					</article>
				)
			})}
		</div>
	)
}
