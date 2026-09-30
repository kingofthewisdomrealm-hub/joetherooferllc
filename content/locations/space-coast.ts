import type { Location } from '@/content/locations/types'

export const spaceCoastLocations: Location[] = [
	{
		slug: 'cape-canaveral-fl',
		name: 'Cape Canaveral',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Cape Canaveral roof inspections for salt air, port wind, and beach houses. Joe the Roofer LLC checks the roof and tells you what it actually needs.',
		intro:
			'Cape Canaveral sits on a narrow barrier island beside Port Canaveral. Roofs here take Atlantic wind and salt, not just a summer rain. A roof can look orderly from the street and still have tired edges.',
		housing:
			'The housing mix runs from older beach cottages to newer multi-story houses and condos. Low eaves, deck connections, and metal edges show up often. Shingle and metal both need a close look after a hard east wind.',
		weather:
			'Wind off the Atlantic and across the port can drive rain sideways. Salt air works on fasteners and flashing faster than it does a few miles inland in Cocoa or Rockledge.',
		issues: [
			'Salt wear on metal edges, fasteners, and flashing',
			'Wind-lifted shingles on the ocean side of the house',
			'Leaks where decks, balconies, or wall flashings meet the roof',
		],
		nearby: ['cocoa-beach-fl', 'cocoa-fl', 'merritt-island-fl', 'titusville-fl'],
		faqs: [
			{
				question: 'Does living next to the port change a roof inspection?',
				answer:
					'Yes. Joe pays extra attention to windward edges and metal that salt air can dull. The goal is to see what the weather did, not to assume every coastal roof needs replacing.',
			},
			{
				question: 'Can you see Cape Canaveral roof damage from the ground?',
				answer:
					'Sometimes a missing shingle is obvious. Lifted edges, cracked flashing, and worn pipe boots usually are not. That is why the check happens on the roof.',
			},
		],
	},
	{
		slug: 'cocoa-beach-fl',
		name: 'Cocoa Beach',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Cocoa Beach roofer for beach houses, salt air, and wind-driven rain. Call Joe for a roof inspection before a small leak becomes the whole ceiling.',
		intro:
			'Cocoa Beach roofs live in salt air, with the ocean on one side and the Banana River on the other. Elevated houses, decks, and older Florida bungalows all give water a different path inside.',
		housing:
			'You will find older cottages, mid-rise buildings, and newer beach houses on the same few blocks. Many roofs are architectural shingle. Some are metal. Flashing around decks and walls matters as much as the shingles themselves.',
		weather:
			'Squalls come straight off the Atlantic. Rain does not always fall down. It blows under laps and into wall joints. After a named storm or a hard nor’easter, hidden damage is common.',
		issues: [
			'Wind-driven rain under shingle laps',
			'Deck and balcony flashing that has opened up',
			'Fastener and edge wear from salt air',
		],
		nearby: ['cape-canaveral-fl', 'merritt-island-fl', 'satellite-beach-fl'],
		faqs: [
			{
				question: 'My Cocoa Beach roof looks fine from the sand. Should I still have it checked?',
				answer:
					'If a storm just passed, or you saw a stain inside, yes. The street view misses lifted shingles and open flashing. If nothing is wrong, Joe will say so.',
			},
			{
				question: 'Do you only replace roofs in Cocoa Beach?',
				answer:
					'No. Repair it when a repair will hold. Replace it when the roof is done. If it needs nothing, that is an answer too.',
			},
		],
	},
	{
		slug: 'cocoa-fl',
		name: 'Cocoa',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Cocoa roofing contractor for riverfront neighborhoods and older mainland houses. Joe inspects the roof and explains the options in plain language.',
		intro:
			'Cocoa is mainland Brevard, across the Indian River from the barrier islands. The roofs are a mix of historic streets near downtown and quieter neighborhoods farther west. Shade, river humidity, and older flashing are the usual story.',
		housing:
			'Downtown and the nearby blocks have older wood-frame and masonry houses with roofs that have been repaired more than once. Farther out, ranches and newer houses are mostly architectural shingle. A few tile roofs show up as well.',
		weather:
			'Cocoa does not take the same direct ocean spray as Cocoa Beach, but storms still cross the river. Oak shade holds moisture on shingles, and that shows up as algae and soft decking around leaks.',
		issues: [
			'Older flashing on houses that have been reroofed in pieces',
			'Algae and moisture on shaded shingle roofs',
			'Leaks at chimneys, vents, and worn pipe boots',
		],
		nearby: ['merritt-island-fl', 'rockledge-fl', 'cape-canaveral-fl', 'titusville-fl'],
		faqs: [
			{
				question: 'Are Cocoa roofs different from the beach roofs?',
				answer:
					'They often are. Mainland houses deal more with tree shade, older details, and river humidity. Beach roofs deal more with salt and open wind. Joe looks at the house in front of him, not a generic coastal checklist.',
			},
			{
				question: 'What should I tell Joe when I call about a Cocoa house?',
				answer:
					'Say what you saw, when it started, and the address. A ceiling stain, a missing shingle, or a storm date is enough to start.',
			},
		],
	},
	{
		slug: 'merritt-island-fl',
		name: 'Merritt Island',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Merritt Island roofer for canal homes and lagoon humidity. Joe the Roofer checks storm wear, flashing, and leaks, then tells you what the roof needs.',
		intro:
			'Merritt Island sits between the Indian River and the Banana River. Canal homes, low eaves, and open water mean wind and humidity reach the roof from more than one direction.',
		housing:
			'Waterfront houses often have complex roof lines, screened lanais, and additions that changed the original flashing. Inland streets on the island are more typical Florida ranches and two-story houses, mostly shingle.',
		weather:
			'Storms stack water in the lagoon and push wind across canals. Humidity hangs around after the rain. That combination finds nail pops, open valleys, and tired boots faster than a dry inland roof.',
		issues: [
			'Flashing where lanais and additions meet the house',
			'Wind across canal lots lifting ridge and edge shingles',
			'Moisture lingering in shaded valleys after rain',
		],
		nearby: ['cocoa-fl', 'cocoa-beach-fl', 'cape-canaveral-fl', 'rockledge-fl'],
		faqs: [
			{
				question: 'Do canal-front roofs on Merritt Island need a different inspection?',
				answer:
					'The inspection is still a roof inspection. The details change: more exposure, more additions, and more chances for wind to work on an edge. Joe documents what is there.',
			},
			{
				question: 'Is Merritt Island part of the Space Coast service area?',
				answer:
					'Yes. Joe the Roofer LLC serves Merritt Island along with the rest of Brevard County and the Space Coast.',
			},
		],
	},
	{
		slug: 'rockledge-fl',
		name: 'Rockledge',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Rockledge roofing for older ranches under oak canopy. Joe finds the leak, the wear, or the storm damage and says whether repair or replacement makes sense.',
		intro:
			'Rockledge is one of Brevard’s older cities, stretched along the river and US-1. Many roofs sit under mature oaks. After a storm, the problem is often debris plus a roof that was already getting tired.',
		housing:
			'Expect 1960s through 1980s ranch houses, some newer infill, and a few larger homes toward the river. Architectural shingles are the common roof. Valleys and dormers show up on the houses that were added onto.',
		weather:
			'Afternoon storms and the occasional tropical system drop limbs and leaves into valleys. Shade slows drying. The river side sees more open wind than the streets tucked under trees.',
		issues: [
			'Oak debris damming valleys and gutters that back water onto the roof',
			'Granule loss and cracked shingles on older roofs',
			'Flashing leaks on additions and chimneys',
		],
		nearby: ['cocoa-fl', 'merritt-island-fl', 'melbourne-fl', 'west-melbourne-fl'],
		faqs: [
			{
				question: 'A branch hit my Rockledge roof. Is that an emergency?',
				answer:
					'If water is coming in, or the roof deck is open, call Joe and say so. If the branch is down and the ceiling is dry, it still deserves a look before the next rain.',
			},
			{
				question: 'Will you tell me if the roof does not need work?',
				answer:
					'Yes. The point of the visit is an honest read of the roof, not a new roof on every street.',
			},
		],
	},
	{
		slug: 'satellite-beach-fl',
		name: 'Satellite Beach',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Satellite Beach roofer for compact barrier-island houses. Salt, wind, and tight lots. Joe inspects and explains what the roof needs.',
		intro:
			'Satellite Beach is a small barrier island south of Patrick Space Force Base. Lots are compact, houses sit close together, and the Atlantic is never far. Roofs here live in salt and wind more than in deep tree shade.',
		housing:
			'Most homes are single-family houses, many from the mid-century buildup of the island plus later remodels. Shingle roofs are common. Metal shows up on replacements. Neighboring roofs and tight side yards can hide edge damage from the street.',
		weather:
			'East wind and tropical rain hit this island directly. There is less oak canopy than in Rockledge, so shingles take more sun and more salt. Fasteners and drip edges tell the story.',
		issues: [
			'Salt and sun wear on exposed shingles and metal',
			'Wind lift on ridges and rakes',
			'Side-yard flashing that is hard to see from the road',
		],
		nearby: ['indian-harbour-beach-fl', 'cocoa-beach-fl', 'melbourne-fl'],
		faqs: [
			{
				question: 'Do Satellite Beach houses need metal roofs?',
				answer:
					'Not automatically. Metal, shingle, and tile each fail in their own way. Joe recommends the work the existing roof needs, and talks through a replacement only when replacement is the sensible move.',
			},
			{
				question: 'How soon after a storm should I call?',
				answer:
					'When you can do it safely. Active leaks come first. If the house is dry, a planned inspection still matters because wind damage is easy to miss from the yard.',
			},
		],
	},
	{
		slug: 'indian-harbour-beach-fl',
		name: 'Indian Harbour Beach',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Indian Harbour Beach roofing for quiet barrier-island homes near the dune line. Joe checks wind, salt, and leaks without a sales script.',
		intro:
			'Indian Harbour Beach sits between Satellite Beach and Indialantic, a short island city of mostly houses. Roofs are close to the dune line and the river. Wind has a clear path.',
		housing:
			'Single-family homes dominate. Some are older beach houses with several reroofs in their history. Others are newer builds with steeper pitches. Shingle is typical. Flashing at walls and equipment stands needs the same attention as the field of the roof.',
		weather:
			'Like the rest of this barrier island, salt air and onshore wind are the constant. Storm surge is a ground problem. Roof problems here are usually wind, driven rain, and worn edges.',
		issues: [
			'Onshore wind lifting courses on the east face',
			'Salt wear at metal edges and fasteners',
			'Leaks at wall flashings on remodeled houses',
		],
		nearby: ['satellite-beach-fl', 'melbourne-fl', 'west-melbourne-fl'],
		faqs: [
			{
				question: 'Is Indian Harbour Beach the same roof story as Melbourne?',
				answer:
					'No. Melbourne includes mainland neighborhoods with trees and newer tracts. Indian Harbour Beach is exposed island housing. Joe treats them as different roofs in different weather.',
			},
			{
				question: 'What does a free inspection include?',
				answer:
					'Joe looks at the roof, notes what is found, and explains the options: repair, replacement, watching it, or no work. It is not a claim filing.',
			},
		],
	},
	{
		slug: 'melbourne-fl',
		name: 'Melbourne',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Melbourne roofing contractor for Eau Gallie, the beaches nearby, and south Brevard houses. Inspections, repair, replacement, and storm checks.',
		intro:
			'Melbourne is the largest city in south Brevard, from the riverfront and Eau Gallie out toward the airport and newer neighborhoods. One city, several roof stories: older downtown houses, shaded streets, and newer subdivisions.',
		housing:
			'Near downtown and Eau Gallie you see older Florida houses, some with tile, many with aged shingles and more than one generation of repairs. West and south of downtown, subdivision roofs are mostly architectural shingle on ranch and two-story homes.',
		weather:
			'Melbourne gets the Space Coast storm track: summer lightning storms and the larger tropical systems that cross Brevard. Houses nearer the river and the inlet feel more wind. Inland streets feel more debris and heat.',
		issues: [
			'Mixed old and new flashing on remodeled Eau Gallie houses',
			'Heat-aged shingles in open subdivisions',
			'Storm-lifted ridges that are easy to miss from the driveway',
		],
		nearby: ['west-melbourne-fl', 'palm-bay-fl', 'indian-harbour-beach-fl', 'satellite-beach-fl'],
		faqs: [
			{
				question: 'Do you cover both beachside Melbourne and the mainland?',
				answer:
					'Yes. Say which part of town the house is in. Beachside wind and mainland shade lead the inspection in different directions.',
			},
			{
				question: 'Can Joe look at a roof before I decide on a full replacement?',
				answer:
					'That is the point. You should hear what the roof needs before anyone talks about a whole new system.',
			},
		],
	},
	{
		slug: 'west-melbourne-fl',
		name: 'West Melbourne',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'West Melbourne roofer for newer subdivisions and HOA neighborhoods west of I-95. Joe inspects shingle roofs after storms and everyday wear.',
		intro:
			'West Melbourne is suburban Brevard: newer tracts, HOA streets, and long runs of architectural shingles. Salt is less of the story here than summer storms, heat, and roofs that were all installed in the same era.',
		housing:
			'Most houses are site-built single-family homes from the last few decades. Roof lines repeat from lot to lot, which makes a tired pipe boot or a lifted ridge easy to compare with the neighbor and still easy to miss.',
		weather:
			'These neighborhoods sit inland of the barrier islands. They still take Brevard thunderstorms and tropical wind. Open retention ponds and wide streets give wind a lane. Tree cover is lighter than in old Rockledge.',
		issues: [
			'Pipe boots and vents failing on roofs of a similar age',
			'Wind lift along ridges in open subdivisions',
			'Heat cracking on sun-facing slopes',
		],
		nearby: ['melbourne-fl', 'palm-bay-fl', 'rockledge-fl'],
		faqs: [
			{
				question: 'My HOA wants a specific shingle. Can you still inspect first?',
				answer:
					'Yes. The inspection comes before product talk. If the roof needs work, neighborhood rules can be part of the options. Joe does not invent an HOA approval he does not have.',
			},
			{
				question: 'Is a newer West Melbourne roof worth checking after a storm?',
				answer:
					'Yes. A younger roof can still lose a ridge cap or open a flashing. Age is not the only question.',
			},
		],
	},
	{
		slug: 'palm-bay-fl',
		name: 'Palm Bay',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Palm Bay roofing contractor for Port Malabar and the growing southwest side of Brevard. Storm checks, repairs, and replacements for homeowners.',
		intro:
			'Palm Bay is a big city of neighborhoods: older Port Malabar streets and newer growth toward the southwest. Most roofs are asphalt shingle, spread across long residential blocks that take full summer sun and fast storms.',
		housing:
			'You will see ranch houses, two-story family homes, and some manufactured homes on larger lots toward the edges. Roof pitches are often simple, which is good, until a valley or a boot fails and water has a straight shot in.',
		weather:
			'Palm Bay is south Brevard, inland of the beaches and closer to the Sebastian corridor. Thunderstorms build in the afternoon. Tropical systems can push wind across wide subdivisions with little to block them.',
		issues: [
			'Widespread shingle aging in neighborhoods built in the same decade',
			'Leak paths at boots, vents, and simple valleys',
			'Wind damage across open subdivision roofs after a storm',
		],
		nearby: ['melbourne-fl', 'west-melbourne-fl', 'sebastian-fl'],
		faqs: [
			{
				question: 'Do you come to the southwest side of Palm Bay?',
				answer:
					'Yes. Palm Bay is part of the Space Coast and Brevard service area, including the newer neighborhoods as well as Port Malabar.',
			},
			{
				question: 'What if only one slope looks bad?',
				answer:
					'Then that slope gets the attention. A whole replacement is the recommendation only when the rest of the roof agrees with it.',
			},
		],
	},
	{
		slug: 'titusville-fl',
		name: 'Titusville',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Titusville roofer for north Brevard houses near downtown and the river. Joe inspects older roofs, storm damage, and leaks.',
		intro:
			'Titusville is north Brevard, across the river from the space center. Downtown streets have older houses. Other neighborhoods spread west with simpler ranch roofs. Wind off the Indian River reaches the waterfront blocks.',
		housing:
			'Many homes are older wood-frame and concrete-block houses with shingle roofs that have been repaired over the years. Some have low slopes and several layers of old flashing. Newer houses west of town look more like the rest of inland Brevard.',
		weather:
			'North Brevard still sits in the tropical storm track. The river adds wind on exposed streets. Inland lots deal more with pine and oak debris after a squall.',
		issues: [
			'Layered repairs on older downtown roofs',
			'River wind on waterfront and US-1 blocks',
			'Debris in valleys after summer storms',
		],
		nearby: ['mims-fl', 'merritt-island-fl', 'cape-canaveral-fl', 'cocoa-fl'],
		faqs: [
			{
				question: 'Are older Titusville roofs usually a full replacement?',
				answer:
					'Not by default. Age is a clue, not a verdict. Joe looks at the deck, the shingles, and the details, then says whether repair still makes sense.',
			},
			{
				question: 'How do I ask Joe to check a Titusville roof?',
				answer:
					'Call, text if a number is published, or send the inspection form with the address and what happened.',
			},
		],
	},
	{
		slug: 'mims-fl',
		name: 'Mims',
		county: 'Brevard County',
		region: 'space-coast',
		description:
			'Mims roofing for rural north Brevard lots, site-built houses, and manufactured homes. Joe checks open-exposure roofs after wind and wear.',
		intro:
			'Mims is unincorporated north Brevard: larger lots, pines, and houses that sit in the open. Roofs here often go longer between professional looks because the lots are spread out and damage is easy to shrug off.',
		housing:
			'You will find site-built houses and manufactured homes, plus sheds and additions that were tied into the main roof later. Shingle is common. Low-slope connections and mismatched repairs show up on properties that grew over time.',
		weather:
			'Without a tight neighborhood of houses to block it, wind crosses these lots more freely. Summer storms drop pine debris. Heat sits on open slopes all afternoon.',
		issues: [
			'Open-lot wind lift on ridges and rakes',
			'Add-on roofs tied into an older main roof',
			'Debris and worn shingles on houses that have not been inspected in years',
		],
		nearby: ['titusville-fl', 'merritt-island-fl'],
		faqs: [
			{
				question: 'Do you inspect manufactured homes in Mims?',
				answer:
					'Joe can look. Manufactured-home roofs are a different assembly than a site-built house, and the recommendation should respect that. If the right fix is outside what the crew should do, Joe will say so rather than force a house roof onto it.',
			},
			{
				question: 'Is Mims far enough north that you skip it?',
				answer:
					'No. Mims is part of the Brevard and Space Coast area Joe the Roofer LLC serves.',
			},
		],
	},
]
