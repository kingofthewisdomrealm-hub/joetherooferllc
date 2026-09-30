import type { Faq } from '@/content/locations/types'
import { locationsIn } from '@/content/locations'

export interface RegionPage {
	slug: string
	name: string
	title: string
	description: string
	intro: string
	detail: string
	weather: string
	counties: string[]
	citySlugs: string[]
	faqs: Faq[]
}

const spaceCoastSlugs = locationsIn('space-coast').map((location) => location.slug)
const treasureSlugs = locationsIn('treasure-coast').map((location) => location.slug)
const centralSlugs = locationsIn('central-florida').map((location) => location.slug)

export const regions: RegionPage[] = [
	{
		slug: 'space-coast-roofing',
		name: 'Space Coast',
		title: 'Space Coast roofing contractor',
		description:
			'Space Coast roof repair, inspections, and storm checks from Cape Canaveral to Palm Bay. Joe the Roofer LLC, backed by Covenant Builders.',
		intro:
			'The Space Coast is a string of barrier islands and a mainland behind them. A roof in Cocoa Beach does not age like a roof in Palm Bay. Salt, port wind, and dune lots are the island story. Shade, subdivisions, and river humidity are the mainland story.',
		detail:
			'Joe works that whole coast as one roofer you can call. The inspection is still about the house: edges, flashing, and whether the roof needs repair, replacement, or nothing. Covenant Builders is the construction backing when a job needs more than a one-person visit.',
		weather:
			'Atlantic wind and tropical systems hit the islands first. The same storm can be a different problem by the time it reaches Rockledge, Melbourne, or Palm Bay. Afternoon thunderstorms still soak the mainland even in a quiet hurricane year.',
		counties: ['Brevard County'],
		citySlugs: spaceCoastSlugs,
		faqs: [
			{
				question: 'Which Space Coast cities do you cover?',
				answer:
					'Cape Canaveral, Cocoa Beach, Cocoa, Merritt Island, Rockledge, Satellite Beach, Indian Harbour Beach, Melbourne, West Melbourne, Palm Bay, Titusville, and Mims.',
			},
			{
				question: 'Is Space Coast roofing the same visit as a Brevard County visit?',
				answer:
					'The county is the same. This page is about the coast itself: islands, salt, and wind. The Brevard page is the county-wide view, including inland streets.',
			},
		],
	},
	{
		slug: 'brevard-county-roofing',
		name: 'Brevard County',
		title: 'Brevard County roofing',
		description:
			'Brevard County roofing from Titusville and Mims to Palm Bay. Local roof inspections with Joe, backed by Covenant Builders.',
		intro:
			'Brevard County runs from the rural lots in Mims to the large neighborhoods of Palm Bay. It includes the beach towns and the river cities. Treating all of that as one roof type would be lazy.',
		detail:
			'North county still has older houses and bigger lots. Central Brevard mixes the islands with Cocoa, Rockledge, and Merritt Island. South county is Melbourne and Palm Bay, where most roofs are subdivision shingles. Joe inspects the house you actually have.',
		weather:
			'The Indian River and the Atlantic both feed storms. North county is more open. South county has more roof area in neighborhoods built since the 1980s. Wind damage and ordinary wear both show up every season.',
		counties: ['Brevard County'],
		citySlugs: spaceCoastSlugs,
		faqs: [
			{
				question: 'Do you serve all of Brevard County?',
				answer:
					'Yes. Beach towns, river cities, and the inland neighborhoods from Mims to Palm Bay are on the service map.',
			},
			{
				question: 'What if I am just outside a listed city?',
				answer:
					'Call Joe with the address. If it is in the Brevard corridor, ask. The city pages are for real local notes, not a fence around the work.',
			},
		],
	},
	{
		slug: 'treasure-coast-roofing',
		name: 'Treasure Coast',
		title: 'Treasure Coast roofing contractor',
		description:
			'Treasure Coast roof repair and storm inspections in Indian River, St. Lucie, and Martin counties. Call Joe.',
		intro:
			'The Treasure Coast is three counties with different roofs. Indian River has Vero Beach and Sebastian. St. Lucie has older Fort Pierce and the big shingle neighborhoods of Port St. Lucie. Martin County has Stuart, Jensen Beach, and Palm City.',
		detail:
			'Beachside tile and wind are not the same job as a Port St. Lucie hip roof or a shaded Palm City street. Joe keeps the relationship personal. Covenant Builders is there when the work needs construction resources behind it.',
		weather:
			'The Atlantic and the Indian River set the wind on the islands. Inland cities take thunderstorms and, in a tropical season, the same systems after they cross the beach. Tree cover matters more in Stuart and Palm City than in the newer St. Lucie tracts.',
		counties: ['Indian River County', 'St. Lucie County', 'Martin County'],
		citySlugs: treasureSlugs,
		faqs: [
			{
				question: 'Which Treasure Coast cities have their own pages?',
				answer:
					'Vero Beach, Sebastian, Fort Pierce, Port St. Lucie, Jensen Beach, Stuart, and Palm City.',
			},
			{
				question: 'Do you file insurance claims?',
				answer:
					'No. Joe inspects, documents what is found, and explains the options. What you do with that information is your decision.',
			},
		],
	},
	{
		slug: 'orlando-roofing',
		name: 'Orlando',
		title: 'Orlando roofing contractor',
		description:
			'Orlando roof repair, replacement, and inspections for homeowners. Joe the Roofer LLC is the local call, backed by Covenant Builders.',
		intro:
			'Orlando roofing here means the city’s houses and the neighborhoods tied to them: Winter Park’s oaks, Winter Garden’s newer west side, Lake Nona’s young roofs, and the streets in between.',
		detail:
			'This is inland work. Salt is not the problem. Heat, afternoon storms, and trees are. Joe’s job is to tell you if the roof can be repaired, if it should be replaced, or if it should be left alone.',
		weather:
			'Orange County builds fast storms almost every summer afternoon. Tropical wind shows up in season. Damage is often on the slope facing away from the street.',
		counties: ['Orange County'],
		citySlugs: ['orlando-fl', 'winter-park-fl', 'winter-garden-fl', 'lake-nona-fl', 'apopka-fl'],
		faqs: [
			{
				question: 'Is this only the city limits of Orlando?',
				answer:
					'The Orlando page is the city and the close-in communities listed here. The wider metro is on the Central Florida page.',
			},
			{
				question: 'Can I get a roof inspection without buying a roof?',
				answer:
					'Yes. That is the point. You should be able to call Joe and get an answer, including an answer that says the roof is fine.',
			},
		],
	},
	{
		slug: 'central-florida-roofing',
		name: 'Central Florida',
		title: 'Central Florida roofing contractor',
		description:
			'Central Florida roof repair and storm checks across Orange, Seminole, and Osceola counties, with the Space Coast and Treasure Coast on the same call.',
		intro:
			'Central Florida, for this company, is the roof corridor from Orlando toward the coasts: Orange County, Seminole County, and Osceola County. It is houses, not a statewide claim.',
		detail:
			'Winter Park is not Kissimmee, and Apopka is not Lake Nona. Each city page says what is different. Together they are one roofer. If the job needs more hands or construction support, Covenant Builders is the backing.',
		weather:
			'Inland storms, heat, and trees define the region. The farther east you drive, the more salt and ocean wind join the story. That is why the Space Coast has its own pages instead of a swapped city name.',
		counties: ['Orange County', 'Seminole County', 'Osceola County'],
		citySlugs: centralSlugs,
		faqs: [
			{
				question: 'Which counties are on this page?',
				answer:
					'Orange, Seminole, and Osceola. Brevard is the Space Coast page. Indian River, St. Lucie, and Martin are the Treasure Coast page.',
			},
			{
				question: 'Can one roofer really cover Orlando and the coasts?',
				answer:
					'Joe is the person you call. The service area is this corridor on purpose. Covenant Builders is the resource behind the work when the job needs it.',
			},
		],
	},
]

export function getRegion(slug: string) {
	return regions.find((region) => region.slug === slug)
}
