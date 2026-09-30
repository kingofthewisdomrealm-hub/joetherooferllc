export interface Service {
	slug: string
	title: string
	summary: string
	body: string
	icon: 'search' | 'wrench' | 'home' | 'cloud' | 'siren' | 'house' | 'building'
}

export const services: Service[] = [
	{
		slug: 'inspections',
		title: 'Roof Inspections',
		summary:
			'Identify storm damage, leaks, wear, missing shingles, flashing problems, and other issues.',
		body: 'A useful inspection tells you what is wrong, what can wait, and what does not need work. Joe looks at the field of the roof, the edges, the penetrations, and the places water actually travels.',
		icon: 'search',
	},
	{
		slug: 'repair',
		title: 'Roof Repair',
		summary: 'Small problems before they become expensive problems.',
		body: 'A lifted shingle, a tired pipe boot, or a flashing gap does not always mean a new roof. If the repair will actually hold, that is the recommendation.',
		icon: 'wrench',
	},
	{
		slug: 'replacement',
		title: 'Roof Replacement',
		summary: 'Complete roofing systems designed for Florida conditions.',
		body: 'When the roof is worn out, patched past the point of sense, or no longer keeping water out, replacement is the honest answer. The system has to stand up to Florida heat, wind, and rain.',
		icon: 'home',
	},
	{
		slug: 'storm',
		title: 'Storm Damage',
		summary:
			'Help homeowners understand what happened after wind, hail, and severe weather.',
		body: 'After a storm, the question is simple: what did the weather do to this roof? Joe inspects, documents what is found, and explains the options. A storm visit is not a promise about insurance.',
		icon: 'cloud',
	},
	{
		slug: 'emergency',
		title: 'Emergency Roofing',
		summary: 'Fast response when roofs suddenly leak or become damaged.',
		body: 'If water is coming in, the first job is to slow it down and see the cause. Call Joe, say what is happening, and where the house is.',
		icon: 'siren',
	},
	{
		slug: 'residential',
		title: 'Residential Roofing',
		summary: 'Primary focus on homeowners.',
		body: 'Houses are the work. Shingle, tile, metal, and the details around them. You should know who is responsible for the roof over your rooms.',
		icon: 'house',
	},
	{
		slug: 'commercial',
		title: 'Commercial Roofing',
		summary:
			'For properties that need more than a house roof, with Covenant Builders’ construction resources in the conversation.',
		body: 'Joe stays the person you talk to. When a property needs a larger crew, equipment, or construction support, Covenant Builders is the backing behind the job. This is not a claim about a specific license or warranty.',
		icon: 'building',
	},
]
