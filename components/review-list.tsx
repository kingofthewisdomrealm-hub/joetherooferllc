import { reviews } from '@/content/reviews'

export function ReviewList() {
	// Nothing renders until there is at least one real review.
	if (!reviews.length) return null

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
