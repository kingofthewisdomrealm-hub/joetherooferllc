import { credentials } from '@/content/site'

const slots = [
	'Customer reviews',
	'Completed projects',
	'Before and after photos',
	'Service areas',
	'Credentials',
	'Manufacturer certifications',
	'Licenses',
	'Warranties',
]

export function TrustPanel() {
	return (
		<div className='grid gap-4 md:grid-cols-2'>
			<div className='rounded-3xl bg-card p-6 shadow-sm'>
				<h3 className='font-heading text-3xl text-ink'>What we will publish</h3>
				<ul className='mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2'>
					{slots.map((slot) => (
						<li key={slot} className='rounded-2xl bg-muted px-3 py-2'>
							{slot}
						</li>
					))}
				</ul>
			</div>
			<div className='rounded-3xl bg-ink p-6 text-paper'>
				<h3 className='font-heading text-3xl'>Only real credentials</h3>
				{credentials.length ? (
					<ul className='mt-4 space-y-3'>
						{credentials.map((item) => (
							<li key={item.label}>
								<p className='font-medium'>{item.label}</p>
								<p className='text-sm text-white/70'>{item.detail}</p>
							</li>
						))}
					</ul>
				) : (
					<p className='mt-4 text-sm leading-relaxed text-white/70'>
						Licenses, certifications, and warranties stay off this site until the wording is
						confirmed. Service areas are listed because that is the work Joe is set up to do.
					</p>
				)}
			</div>
		</div>
	)
}
