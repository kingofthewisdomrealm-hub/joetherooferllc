export type RegionKey = 'space-coast' | 'treasure-coast' | 'central-florida'

export interface Faq {
	question: string
	answer: string
}

export interface Location {
	slug: string
	name: string
	county: string
	region: RegionKey
	description: string
	intro: string
	housing: string
	weather: string
	issues: string[]
	nearby: string[]
	faqs: Faq[]
}
