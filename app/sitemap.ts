import type { MetadataRoute } from 'next'
import { locations } from '@/content/locations'
import { regions } from '@/content/regions'
import { storms } from '@/content/storms'
import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
	const paths = [
		'/',
		'/roofing',
		'/storm-damage',
		'/projects',
		'/about',
		'/service-areas',
		'/contact',
		'/privacy',
		'/terms',
		'/accessibility',
		...regions.map((region) => `/${region.slug}`),
		...locations.map((location) => `/roofing/${location.slug}`),
		...storms.map((storm) => `/storms/${storm.slug}`),
	]

	return paths.map((path) => ({
		url: `${site.url}${path}`,
		changeFrequency: 'monthly',
		priority: path === '/' ? 1 : 0.7,
	}))
}
