import type { Location } from '@/content/locations/types'

export const treasureCoastLocations: Location[] = [
	{
		slug: 'vero-beach-fl',
		name: 'Vero Beach',
		county: 'Indian River County',
		region: 'treasure-coast',
		description:
			'Vero Beach roofer for beachside tile and shingle houses and mainland neighborhoods. Joe checks the roof and says what it needs.',
		intro:
			'Vero Beach splits into a barrier island and a mainland city, and the roofs do not live the same life. Beachside takes salt and a cleaner wind. Mainland streets sit under oaks, closer to the Indian River’s humidity.',
		housing:
			'Beachside houses often carry tile or metal, with shingle on smaller homes. Mainland Vero is ranches, newer subdivisions, and older blocks near downtown. Pipe boots and valley metal fail in different ways on each side of the bridge.',
		weather:
			'The island gets a harder east wind. The mainland gets shade, leaves, and slow moisture. A storm that glances the beach can still open flashing on a shaded ranch a mile inland.',
		issues: [
			'Salt and wind on beachside edges and tile hips',
			'Oak debris and shaded algae on mainland shingles',
			'Flashing gaps where older additions meet the original roof',
		],
		nearby: ['sebastian-fl', 'fort-pierce-fl'],
		faqs: [
			{
				question: 'Do beachside and mainland Vero Beach roofs fail the same way?',
				answer:
					'Not usually. Beachside shows wind and salt first. Mainland roofs show shade, leaves, and older flashing. Joe looks at the house in front of him, not a generic coastal checklist.',
			},
			{
				question: 'Will you tell me if my Vero Beach roof can be repaired?',
				answer:
					'Yes. If a repair will hold, that is the recommendation. Replacement is for roofs that are actually used up.',
			},
		],
	},
	{
		slug: 'sebastian-fl',
		name: 'Sebastian',
		county: 'Indian River County',
		region: 'treasure-coast',
		description:
			'Sebastian roofer near the inlet and the Indian River. Storm checks and plain answers for older neighborhoods and newer houses west of town.',
		intro:
			'Sebastian sits at the north end of the Treasure Coast, with the inlet on one side and quieter streets spreading west. Wind off the water and older Florida roofs are the combination Joe sees most.',
		housing:
			'Closer to the river and the inlet, lots are older and roofs have been patched. West of town, newer houses are mostly architectural shingle. Both need a look at penetrations, not just the field of the shingles.',
		weather:
			'Sebastian Inlet is an open wind path. Rain can be driven under laps even when the yard looks calm an hour later. Summer storms still stack up over Indian River County in the afternoon.',
		issues: [
			'Wind from the inlet lifting edges and ridge caps',
			'Older patched roofs that leak at the last repair',
			'Worn pipe boots on otherwise sound shingles',
		],
		nearby: ['vero-beach-fl', 'palm-bay-fl', 'melbourne-fl'],
		faqs: [
			{
				question: 'Is a Sebastian roof inspection only for after a hurricane?',
				answer:
					'No. A leak, a stain, or a roof that is simply old is reason enough. After a storm, the same visit is how you learn what the wind actually did.',
			},
			{
				question: 'Do you come to Sebastian from the Space Coast?',
				answer:
					'Yes. Sebastian is part of the Treasure Coast work, along with Vero Beach and the cities farther south.',
			},
		],
	},
	{
		slug: 'fort-pierce-fl',
		name: 'Fort Pierce',
		county: 'St. Lucie County',
		region: 'treasure-coast',
		description:
			'Fort Pierce roofing contractor for older houses, beachside streets, and roofs that have been repaired more than once.',
		intro:
			'Fort Pierce has an older housing stock than the big subdivisions to the south. Downtown, the inlet, and the beachside each put a different kind of wear on a roof. The useful question is what this house needs, not what a new neighborhood brochure says.',
		housing:
			'Many homes are older masonry and wood-frame houses with architectural shingles, and some smaller buildings have low-slope sections. Additions are common, which means more flashing joints. Beachside houses take more wind than the blocks west of US-1.',
		weather:
			'The inlet and the Atlantic give Fort Pierce a real wind exposure. Afternoon storms still cross St. Lucie County and drop a lot of water in a short time. Older decks can telegraph that rain as a ceiling stain.',
		issues: [
			'Open flashing on older additions and walls',
			'Wind damage on beachside and inlet exposures',
			'Low-slope sections that pond after hard rain',
		],
		nearby: ['port-st-lucie-fl', 'vero-beach-fl', 'jensen-beach-fl'],
		faqs: [
			{
				question: 'My Fort Pierce roof has been patched before. Can you tell what is left?',
				answer:
					'That is the point of the inspection. Joe looks at the patches, the deck underneath where it can be seen, and whether another repair is honest or just a delay.',
			},
			{
				question: 'Do you handle houses and small commercial roofs in Fort Pierce?',
				answer:
					'Houses are the focus. When a property needs a larger crew or construction support, Covenant Builders is the backing behind Joe. No license or warranty is claimed on this page.',
			},
		],
	},
	{
		slug: 'port-st-lucie-fl',
		name: 'Port St. Lucie',
		county: 'St. Lucie County',
		region: 'treasure-coast',
		description:
			'Port St. Lucie roof repair and inspections for subdivision shingle roofs in Tradition, St. Lucie West, and the older sections of the city.',
		intro:
			'Port St. Lucie is a city of planned neighborhoods. Most roofs are architectural shingle, built from the 1980s through the last decade. They fail in familiar ways: pipe boots, ridge caps, and wind at the edges, not mystery materials.',
		housing:
			'St. Lucie West, Tradition, and the older PGA-area streets are different ages of the same idea: single-family houses, HOA neighborhoods, and hip roofs. The newer roofs are not immune to a storm. The older ones are often ready for an honest look before the next season.',
		weather:
			'This is inland of the beach, so salt is less of the story than in Fort Pierce beachside. Summer thunderstorms and tropical wind still move a lot of water across long shingle planes.',
		issues: [
			'Pipe boots and vents on otherwise middle-aged shingle roofs',
			'Lifted edges after straight-line wind',
			'Ridge caps that have cracked in the heat',
		],
		nearby: ['fort-pierce-fl', 'jensen-beach-fl', 'stuart-fl', 'palm-city-fl'],
		faqs: [
			{
				question: 'Are newer Port St. Lucie roofs too new to inspect?',
				answer:
					'No. A young roof can still have a flashing miss or storm damage. If the roof is fine, you should hear that clearly.',
			},
			{
				question: 'Do HOA neighborhoods change the inspection?',
				answer:
					'The roof is still the roof. If a neighborhood has rules about materials, tell Joe when you call. The recommendation starts with what the roof needs.',
			},
		],
	},
	{
		slug: 'jensen-beach-fl',
		name: 'Jensen Beach',
		county: 'Martin County',
		region: 'treasure-coast',
		description:
			'Jensen Beach roofer for island cottages and mainland houses between the Indian River and the Atlantic.',
		intro:
			'Jensen Beach is small, and the roofs feel it. The island is close to the water on both sides. Mainland streets sit in oak hammocks. Wind and tree debris show up on the same street for different reasons.',
		housing:
			'Island houses are often older cottages and rebuilt beach homes with busy roof lines. Mainland Jensen has ranches and newer houses under mature trees. Tile shows up, but shingle is still common.',
		weather:
			'The island takes Atlantic wind with little land in the way. Under the oaks, leaves hold moisture and hide granules in the gutters. Both are worth a roof visit after a storm, not a guess from the driveway.',
		issues: [
			'Wind-lifted shingles on the island',
			'Tree debris and shaded moisture on mainland roofs',
			'Complicated flashing on older beach cottages',
		],
		nearby: ['stuart-fl', 'port-st-lucie-fl', 'fort-pierce-fl'],
		faqs: [
			{
				question: 'Is Jensen Beach included with Stuart roofing?',
				answer:
					'Joe serves both. Jensen Beach has its own page because the island and the hammock streets are not the same roof problem as downtown Stuart.',
			},
			{
				question: 'What should I do if I find shingles in the yard?',
				answer:
					'Call Joe and say what you see. Shingles in the yard usually mean the roof needs a person on it, not a photo from the sidewalk.',
			},
		],
	},
	{
		slug: 'stuart-fl',
		name: 'Stuart',
		county: 'Martin County',
		region: 'treasure-coast',
		description:
			'Stuart roofing contractor for downtown houses, waterfront roofs, and the neighborhoods under Martin County’s oak cover.',
		intro:
			'Stuart is the Martin County seat, with a real downtown, a working waterfront, and older houses whose roofs have more hips and valleys than a new subdivision. Water finds those joints.',
		housing:
			'Downtown and the older streets mix shingle, tile, and metal on houses that have been added onto. Newer areas west of the river are simpler shingle roofs. The inspection has to follow the actual roof, not a single template.',
		weather:
			'The St. Lucie River and the inlet nearby keep the air wet. Storms push in from the Atlantic and stall over Martin County. Tree cover protects some slopes and dumps limbs on others.',
		issues: [
			'Leaks at valleys and additions on older downtown roofs',
			'Limb and debris damage after wind',
			'Worn underlayment paths where a roof has been coated or patched',
		],
		nearby: ['jensen-beach-fl', 'palm-city-fl', 'port-st-lucie-fl'],
		faqs: [
			{
				question: 'Can Joe inspect an older Stuart house without assuming it needs a full replacement?',
				answer:
					'Yes. Older does not automatically mean replace. The visit is to see whether the roof still has a sound deck and a repair that will last.',
			},
			{
				question: 'Do you document what you find?',
				answer:
					'Yes. You should leave with a clear picture of the condition and the options, including the option to do nothing.',
			},
		],
	},
	{
		slug: 'palm-city-fl',
		name: 'Palm City',
		county: 'Martin County',
		region: 'treasure-coast',
		description:
			'Palm City roof inspections for family neighborhoods west of Stuart. Shingle roofs, golf-course trees, and storm checks without a sales script.',
		intro:
			'Palm City is mostly houses, west of the Stuart bridges. The roofs are neighborhood roofs: hip shingles, a few tile communities, and trees that drop debris every summer. Salt is not the main problem here. Wind, heat, and branches are.',
		housing:
			'Subdivisions and golf-course streets dominate. Many roofs are architectural shingle from the 1990s and 2000s. Some communities use tile. Chimneys and skylights are less common than in downtown Stuart, so the usual leaks are boots, ridges, and edges.',
		weather:
			'Martin County thunderstorms still hit hard west of the river. A roof under pines can look dirty and still be fine, or it can hide a soft spot where a limb sat after a storm.',
		issues: [
			'Granule loss and heat wear on older shingle neighborhoods',
			'Branch damage that is easy to miss from the lawn',
			'Edge lifting in open sections of a subdivision',
		],
		nearby: ['stuart-fl', 'jensen-beach-fl', 'port-st-lucie-fl'],
		faqs: [
			{
				question: 'Is Palm City different from a beach roofing job?',
				answer:
					'Yes. There is less salt and more tree cover. Joe still gets on the roof. The recommendation follows what is there.',
			},
			{
				question: 'How do I ask Joe to check a Palm City house?',
				answer:
					'Call, text if a number is published, or send the inspection form with the address and what you are seeing.',
			},
		],
	},
]
