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
			'Find out what is actually wrong: leaks, storm damage, worn shingles, bad flashing.',
		body: 'A useful inspection tells you what is wrong, what can wait, and what does not need work. Joe looks at the whole roof: the edges, the vents and pipes coming through it, and the places water actually travels.',
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
		summary: 'A new roof built to take Florida sun, wind, and rain.',
		body: 'When the roof is worn out, patched past the point of sense, or no longer keeping water out, replacement is the honest answer. The system has to stand up to Florida heat, wind, and rain.',
		icon: 'home',
	},
	{
		slug: 'storm',
		title: 'Storm Damage',
		summary:
			'Find out what the wind or hail actually did.',
		body: 'After a storm, the question is simple: what did the weather do to this roof? Joe inspects, photographs what he finds, and explains your options. What you do with that is your call.',
		icon: 'cloud',
	},
	{
		slug: 'emergency',
		title: 'Emergency Roofing',
		summary: 'Water coming in? Call now.',
		body: 'If water is coming in, the first job is to slow it down and see the cause. Call Joe. Tell him what’s happening and where the house is.',
		icon: 'siren',
	},
	{
		slug: 'residential',
		title: 'Residential Roofing',
		summary: 'Homes are most of the work.',
		body: 'Shingle, tile, metal, and the details around them. You should know exactly who is responsible for the roof over your family.',
		icon: 'house',
	},
	{
		slug: 'commercial',
		title: 'Commercial Roofing',
		summary:
			'Bigger buildings, with Covenant Builders’ crews and equipment behind the job.',
		body: 'Joe stays the person you talk to. When a property needs a larger crew, equipment, or construction support, Covenant Builders is the backing behind the job.',
		icon: 'building',
	},
]
