export const site = {
	name: 'Joe the Roofer LLC',
	shortName: 'Joe the Roofer',
	domain: 'joetherooferllc.com',
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://joetherooferllc.com',
	phone: process.env.NEXT_PUBLIC_PHONE || '(772) 410-7170',
	email: process.env.NEXT_PUBLIC_EMAIL || '',
	covenantName: 'Covenant Builders',
	covenantUrl: process.env.NEXT_PUBLIC_COVENANT_URL || '',
	facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
	instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
	description:
		'Family-owned roofing for Florida’s Space Coast, Treasure Coast, and Central Florida. Joe the Roofer LLC is backed by Covenant Builders.',
}

export interface Credential {
	label: string
	detail: string
}

/** Publish a license, certification, or warranty only after the owner confirms the wording. */
export const credentials: Credential[] = []
