export interface SitePhoto {
	src: string
	alt: string
}

/** Real roof photos supplied for the site. No stock stand-ins. */
export const photos: SitePhoto[] = [
	{
		src: '/images/two-story.jpg',
		alt: 'A two-story Florida house with a dark architectural shingle roof, palm trees, and a ladder at the side wall',
	},
	{
		src: '/images/front-elevation.jpg',
		alt: 'The front of a single-story house with a light gray shingle roof under a clear blue sky',
	},
	{
		src: '/images/garage-hip.jpg',
		alt: 'A white hip-roof house with a garage, a ladder at the eave, and a boat in the side yard',
	},
	{
		src: '/images/side-elevation.jpg',
		alt: 'The long side of a stucco house and its gray shingle roof against a bright sky',
	},
	{
		src: '/images/ridge-detail.jpg',
		alt: 'A close view of architectural shingles, the ridge cap, and a pipe flashing on a residential roof',
	},
]
