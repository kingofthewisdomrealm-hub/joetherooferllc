import { centralFloridaLocations } from '@/content/locations/central-florida'
import { spaceCoastLocations } from '@/content/locations/space-coast'
import { treasureCoastLocations } from '@/content/locations/treasure-coast'
import type { Location, RegionKey } from '@/content/locations/types'

export type { Faq, Location, RegionKey } from '@/content/locations/types'

export const locations: Location[] = [
	...spaceCoastLocations,
	...treasureCoastLocations,
	...centralFloridaLocations,
]

export function getLocation(slug: string) {
	return locations.find((location) => location.slug === slug)
}

export function locationsIn(region: RegionKey) {
	return locations.filter((location) => location.region === region)
}

export function nearbyLocations(slugs: string[]) {
	return slugs
		.map((slug) => getLocation(slug))
		.filter((location): location is Location => Boolean(location))
}
