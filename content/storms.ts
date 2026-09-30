export interface StormEvent {
	slug: string
	name: string
	date: string
	summary: string
	areas: string[]
	whatToLookFor: string[]
}

/**
 * Storm-date pages publish only when an entry exists.
 * Add a storm here after it happens. Do not invent dates or damage totals.
 */
export const storms: StormEvent[] = []
