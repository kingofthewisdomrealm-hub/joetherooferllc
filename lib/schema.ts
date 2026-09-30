import { locations } from '@/content/locations'
import { site } from '@/content/site'

export function roofingBusinessSchema() {
	const data: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@type': 'RoofingContractor',
		name: site.name,
		url: site.url,
		description: site.description,
		areaServed: locations.map((location) => ({
			'@type': 'City',
			name: `${location.name}, FL`,
		})),
	}

	if (site.phone) data.telephone = site.phone
	if (site.email) data.email = site.email

	const sameAs = [site.facebookUrl, site.instagramUrl, site.covenantUrl].filter(Boolean)
	if (sameAs.length) data.sameAs = sameAs

	return data
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	}
}
