import { reviews } from '@/content/reviews'

export function ReviewList() {
	if (!reviews.length) {
		return (
			<div className='rounded-3xl border border-dashed border-border bg-card/60 p-8'>
				<p className='font-heading text-3xl text-ink'>Homeowner reviews will live here.</p>
				<p className='mt-3 max-w-xl text-muted-foreground'>
					Only real reviews will be published. None are shown until they exist. This block is ready
					for Google reviews later.
				</p>
			</div>
		)
	}

	return (
		<div className='grid gap-4 md:grid-cols-2'>
			{reviews.map((review) => (
				<figure key={`${review.name}-${review.city}`} className='rounded-3xl bg-card p-6 shadow-sm'>
					<blockquote className='text-lg leading-relaxed'>&ldquo;{review.quote}&rdquo;</blockquote>
					<figcaption className='mt-4 text-sm text-muted-foreground'>
						{review.name}, {review.city}
						{review.source ? ` · ${review.source}` : ''}
					</figcaption>
				</figure>
			))}
		</div>
	)
}
