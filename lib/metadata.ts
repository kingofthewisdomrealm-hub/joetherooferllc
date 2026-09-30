import type { Metadata } from 'next'
import { site } from '@/content/site'

export function pageMeta(title: string, description: string, path: string): Metadata {
	return {
		title,
		description,
		alternates: { canonical: path },
		openGraph: {
			title,
			description,
			url: path,
			siteName: site.name,
			images: [
				{
					url: '/images/two-story.jpg',
					alt: 'A two-story Florida house with a dark shingle roof and palm trees',
				},
			],
			locale: 'en_US',
			type: 'website',
		},
	}
}
