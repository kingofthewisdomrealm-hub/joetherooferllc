export interface Review {
	quote: string
	name: string
	city: string
	source?: string
}

/** Real homeowner reviews only. Do not add sample quotes. */
export const reviews: Review[] = []
