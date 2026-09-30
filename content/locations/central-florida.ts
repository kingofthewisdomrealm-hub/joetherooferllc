import type { Location } from '@/content/locations/types'

export const centralFloridaLocations: Location[] = [
	{
		slug: 'orlando-fl',
		name: 'Orlando',
		county: 'Orange County',
		region: 'central-florida',
		description:
			'Orlando roofer for house roofs across the city. Inspections, repair, and replacement with a straight answer, backed by Covenant Builders.',
		intro:
			'Orlando roofing, for Joe, means houses. Neighborhoods from College Park to the south and east sides carry miles of shingle, with tile in some gated streets. The weather is inland: hard afternoon storms, heat, and trees, not beach salt.',
		housing:
			'Mid-century blocks have older, more complicated roofs. Newer suburbs repeat hip roofs and architectural shingles. Tile shows up in communities that wanted a different look. The leak is still usually a boot, a valley, or a flashing joint.',
		weather:
			'Summer storms build over Orange County and drop a lot of rain in minutes. Wind is enough to lift edges even without a hurricane. After a storm, damage is often on the slope you cannot see from the driveway.',
		issues: [
			'Lifted shingles after afternoon and tropical wind',
			'Pipe boots cracked by heat on middle-aged roofs',
			'Oak and pine debris hiding bruises in the shingles',
		],
		nearby: ['winter-park-fl', 'winter-garden-fl', 'lake-nona-fl', 'kissimmee-fl'],
		faqs: [
			{
				question: 'Do you roof high-rise buildings in downtown Orlando?',
				answer:
					'The focus is houses. If a property needs larger construction resources, that conversation includes Covenant Builders. Joe remains the person you talk to.',
			},
			{
				question: 'Is an Orlando roof inspection a sales appointment?',
				answer:
					'It is a look at the roof. Repair it if it can be repaired. Replace it when that is the honest choice. Say so if nothing needs doing.',
			},
		],
	},
	{
		slug: 'winter-park-fl',
		name: 'Winter Park',
		county: 'Orange County',
		region: 'central-florida',
		description:
			'Winter Park roofer for older brick and stucco houses under mature oaks. Complicated roofs, tree debris, and a clear recommendation.',
		intro:
			'Winter Park roofs are rarely simple rectangles. Older houses, brick, stucco, and big oaks make shade, leaves, and extra flashing. A roof here can be expensive to guess at, which is why the inspection has to be specific.',
		housing:
			'Many homes are older, with dormers, chimneys, and additions. You will see architectural shingles and tile. The details around walls matter more than the brand name on the shingle.',
		weather:
			'The tree canopy catches wind-blown limbs and holds moisture. Storms still cross from the west and south. A clean street does not mean the valleys are clean.',
		issues: [
			'Leaf-packed valleys and hidden moisture',
			'Flashing at chimneys, dormers, and sidewalls',
			'Limb strikes that bruise shingles without blowing them off',
		],
		nearby: ['orlando-fl', 'casselberry-fl', 'oviedo-fl', 'altamonte-springs-fl'],
		faqs: [
			{
				question: 'Can shade in Winter Park cause roof problems by itself?',
				answer:
					'Shade plus debris can hold water and hide wear. It does not automatically mean the roof is finished. Joe looks before recommending work.',
			},
			{
				question: 'Will you get on an older, steep Winter Park roof?',
				answer:
					'If it can be inspected safely, yes. If a slope cannot be walked, Joe will say what could and could not be seen.',
			},
		],
	},
	{
		slug: 'winter-garden-fl',
		name: 'Winter Garden',
		county: 'Orange County',
		region: 'central-florida',
		description:
			'Winter Garden roofing for the historic streets and the newer Horizon West neighborhoods west of town.',
		intro:
			'Winter Garden has two roof stories. Closer to downtown, houses are older and the roofs have been lived on longer. Horizon West and the western growth are newer shingle neighborhoods that still take Central Florida storms.',
		housing:
			'Downtown-adjacent homes mix older shingles and renovations. The western communities are mostly architectural shingle on production homes, with tile in some sections. Age changes the advice. The weather does not.',
		weather:
			'Lake humidity and afternoon storms are the pattern. Open new neighborhoods take wind across many similar roofs at once. Older streets take debris from larger trees.',
		issues: [
			'Storm-lifted edges in newer western subdivisions',
			'Worn boots and ridges on older downtown-area roofs',
			'Matching repairs so a small fix does not become a patchwork',
		],
		nearby: ['orlando-fl', 'apopka-fl', 'kissimmee-fl'],
		faqs: [
			{
				question: 'Do new Winter Garden roofs still need a storm check?',
				answer:
					'Yes, if wind or a leak showed up. New does not mean untouched. If the roof is sound, that is what you will hear.',
			},
			{
				question: 'Are you driving out to Horizon West?',
				answer:
					'Yes. Winter Garden, including the newer western neighborhoods, is part of the Central Florida service area.',
			},
		],
	},
	{
		slug: 'lake-nona-fl',
		name: 'Lake Nona',
		county: 'Orange County',
		region: 'central-florida',
		description:
			'Lake Nona roof inspections for newer master-planned houses. Young roofs still take storms, and a small flashing miss is easier to fix early.',
		intro:
			'Lake Nona is young compared with Winter Park or Kissimmee’s older blocks. Most roofs have not lived through decades of Florida sun. They have lived through construction next door and the same thunderstorms as the rest of Orlando.',
		housing:
			'The houses are master-planned: architectural shingles, some tile, and repeated hip roofs. HOA streets care about how a roof looks. The inspection cares about whether water is getting in.',
		weather:
			'Southeast Orlando storms move fast. A young roof can lose a few shingles or open a vent flashing without looking old from the curb. Heat is already working on sealant strips.',
		issues: [
			'Storm-lifted shingles on young roofs',
			'Flashing misses from original construction',
			'Debris from nearby building that masks the field of the roof',
		],
		nearby: ['orlando-fl', 'kissimmee-fl', 'st-cloud-fl', 'celebration-fl'],
		faqs: [
			{
				question: 'Is a Lake Nona roof too new for repair instead of replacement?',
				answer:
					'Often a repair is the right call on a young roof. Joe will say if the damage is local or if the roof has a bigger problem.',
			},
			{
				question: 'Do you work with the neighborhood rules?',
				answer:
					'Tell Joe about material rules when you call. The first job is still an accurate look at the roof.',
			},
		],
	},
	{
		slug: 'kissimmee-fl',
		name: 'Kissimmee',
		county: 'Osceola County',
		region: 'central-florida',
		description:
			'Kissimmee roofing contractor for family neighborhoods and vacation-home streets. Shingle roofs, HOA communities, and storm inspections.',
		intro:
			'Kissimmee roofs cover homes people live in and homes that turn over with guests. The roof does not care which one it is. Heat, wind, and delayed maintenance show up the same way: a stain, a missing shingle, a soft deck.',
		housing:
			'Most roofs are architectural shingle in subdivisions, with tile in some communities. Vacation corridors and year-round neighborhoods sit near each other. Absentee owners often find damage later than someone who sleeps there every night.',
		weather:
			'Osceola County gets the same heavy summer storms as Orlando, sometimes with more open exposure. Tropical systems that cross the state still put wind on these hip roofs.',
		issues: [
			'Deferred wear on houses that are not checked often',
			'Wind-lifted shingles after fast-moving storms',
			'Heat-cracked boots and sealant on sunny, unshaded roofs',
		],
		nearby: ['st-cloud-fl', 'celebration-fl', 'orlando-fl', 'lake-nona-fl'],
		faqs: [
			{
				question: 'Can you inspect a Kissimmee house if the owner is not local?',
				answer:
					'Yes. Send the address and a way to reach you. Joe still needs permission to be on the property.',
			},
			{
				question: 'Do rental houses get a different roof recommendation?',
				answer:
					'No. The roof gets the recommendation it needs. Repair, replace, or leave it alone.',
			},
		],
	},
	{
		slug: 'celebration-fl',
		name: 'Celebration',
		county: 'Osceola County',
		region: 'central-florida',
		description:
			'Celebration roofer for planned-town roofs with stricter looks and more complicated shapes than a typical subdivision.',
		intro:
			'Celebration was built to look a certain way, and the roofs show it. There are more roof forms, more trim, and more chances for flashing to be the real story. A storm check here is about those joints, not a generic shingle count.',
		housing:
			'Houses follow town architectural rules. You will see shingle and tile, porches, and roof lines that change direction. That is different from a Kissimmee hip roof repeated for ten blocks.',
		weather:
			'The town sits in Osceola County’s storm path. Wind can peel an edge on a decorative slope just as it can on a plain one. Trees in the older parts of town drop debris into valleys.',
		issues: [
			'Flashing where roof planes and porch roofs meet',
			'Storm damage on smaller, steeper slopes',
			'Material rules that affect how a repair should look',
		],
		nearby: ['kissimmee-fl', 'orlando-fl', 'st-cloud-fl'],
		faqs: [
			{
				question: 'Will a repair in Celebration have to match the house?',
				answer:
					'If the neighborhood requires a look, say so up front. Joe will tell you what the roof needs and what that means for the repair.',
			},
			{
				question: 'Is Celebration served with the rest of Osceola County?',
				answer:
					'Yes. It has its own page because the roofs are not the same as the surrounding subdivision stock.',
			},
		],
	},
	{
		slug: 'st-cloud-fl',
		name: 'St. Cloud',
		county: 'Osceola County',
		region: 'central-florida',
		description:
			'St. Cloud roof repair and inspections for downtown bungalows and the newer houses on the east side of town.',
		intro:
			'St. Cloud still has older downtown houses, and it has newer growth pushing east. Lakefront humidity and ordinary Florida shingle roofs are the mix. It is not the tourist corridor, and the roofs should not be treated like it.',
		housing:
			'Near downtown, bungalows and older masonry homes have roofs that may have been replaced once already. Eastern neighborhoods are newer architectural shingle. A few streets near the lakes pick up more moisture and moss in the shade.',
		weather:
			'Storms that cross Osceola County do not skip St. Cloud. Lakes add humidity. Wind still lifts edges on the more open eastern streets.',
		issues: [
			'Older downtown roofs with patched flashing',
			'Moisture and algae on shaded lakefront slopes',
			'Storm damage on newer eastern subdivisions',
		],
		nearby: ['kissimmee-fl', 'lake-nona-fl', 'celebration-fl'],
		faqs: [
			{
				question: 'Do you inspect both old St. Cloud houses and new ones?',
				answer:
					'Yes. The age changes what Joe expects to find. It does not change the promise to say what the roof actually needs.',
			},
			{
				question: 'How fast can someone look at a leaking St. Cloud roof?',
				answer:
					'Call Joe and describe the leak. Active water is treated as urgent. A dry stain can usually wait for a scheduled inspection.',
			},
		],
	},
	{
		slug: 'altamonte-springs-fl',
		name: 'Altamonte Springs',
		county: 'Seminole County',
		region: 'central-florida',
		description:
			'Altamonte Springs roofing contractor for 1970s through 1990s neighborhoods. Tree cover, older shingles, and straight storm checks.',
		intro:
			'Altamonte Springs is largely built out. The roofs Joe sees are often middle-aged shingle roofs under real tree cover, not brand-new subdivisions. Springs and lakes nearby keep the air wetter than the open fields west of Apopka.',
		housing:
			'Ranch houses and two-story homes from the late twentieth century dominate. Architectural shingles are the norm. Tile is less common than in some Orlando communities. Many roofs are on their second or third covering conversation.',
		weather:
			'Seminole County afternoon storms are reliable. Trees drop limbs. Shade hides granule loss until the ceiling tells on it.',
		issues: [
			'Age wear on late-1900s shingle roofs',
			'Limb damage under mature trees',
			'Flashing that was reused during an older replacement',
		],
		nearby: ['casselberry-fl', 'winter-park-fl', 'sanford-fl', 'apopka-fl'],
		faqs: [
			{
				question: 'Is an older Altamonte Springs roof always a replacement?',
				answer:
					'No. Some older roofs still have life if the deck is sound and the leak is local. Joe will say which one you have.',
			},
			{
				question: 'Are you the same roofer for the rest of Seminole County?',
				answer:
					'Yes. Casselberry, Oviedo, and Sanford are part of the same Central Florida work.',
			},
		],
	},
	{
		slug: 'casselberry-fl',
		name: 'Casselberry',
		county: 'Seminole County',
		region: 'central-florida',
		description:
			'Casselberry roofer for mid-century ranches and oak-covered streets between Altamonte Springs and Winter Park.',
		intro:
			'Casselberry is a smaller city with older roofs than the growth towns east of it. Ranches, carports, and oak canopy are the usual setting. The leaks tend to be specific: a valley, a boot, a wall flashing.',
		housing:
			'Mid-century and later ranches make up much of the city. Roofs are mostly shingle, sometimes low near a carport or Florida room. Those lower ties are where water likes to sit.',
		weather:
			'The tree cover is a feature of the city and a source of debris. Storms still push wind through Seminole County. A roof can be bruised by a limb and look intact from the lawn.',
		issues: [
			'Leaks where Florida rooms and carports meet the main roof',
			'Oak debris in valleys',
			'Older shingles that are granule-bare on the sunny slope',
		],
		nearby: ['altamonte-springs-fl', 'winter-park-fl', 'oviedo-fl', 'sanford-fl'],
		faqs: [
			{
				question: 'Can a Florida-room leak be a roof problem and not a window problem?',
				answer:
					'Often it is the joint between the roofs. Joe checks that connection instead of guessing from inside the room.',
			},
			{
				question: 'Do you replace every worn Casselberry roof you see?',
				answer:
					'No. Worn is not the same as failed. You get the distinction in plain language.',
			},
		],
	},
	{
		slug: 'oviedo-fl',
		name: 'Oviedo',
		county: 'Seminole County',
		region: 'central-florida',
		description:
			'Oviedo roofing contractor for newer east-side subdivisions and the older streets closer to downtown.',
		intro:
			'Oviedo grew fast, and a lot of its roofs are newer shingle systems on family houses. Closer to the older center of town, roofs have more years on them. Both sit in the path of storms that roll across eastern Seminole County.',
		housing:
			'Subdivision hip roofs are the volume. Some rural-edge properties have longer drives and more tree exposure. Tile appears in scattered communities. Most calls are still about shingles.',
		weather:
			'Storms often arrive from the east and south in summer. New neighborhoods with fewer trees take the wind more directly. Older shaded lots take the branches.',
		issues: [
			'Wind damage on open subdivision roofs',
			'Tree debris on the rural edges of town',
			'Vent and boot details on roofs that otherwise look new',
		],
		nearby: ['winter-park-fl', 'casselberry-fl', 'sanford-fl', 'orlando-fl'],
		faqs: [
			{
				question: 'Oviedo roofs are newer. Why call a roofer?',
				answer:
					'Because storms and small flashing problems do not wait for a roof to look old. A check is how you avoid replacing something that only needed a repair.',
			},
			{
				question: 'Do you cover the neighborhoods east of downtown Oviedo?',
				answer:
					'Yes. If the house is in Oviedo, it is in this service area.',
			},
		],
	},
	{
		slug: 'sanford-fl',
		name: 'Sanford',
		county: 'Seminole County',
		region: 'central-florida',
		description:
			'Sanford roofer for historic downtown houses and newer neighborhoods, with river humidity from Lake Monroe in the mix.',
		intro:
			'Sanford has a historic downtown and newer housing around it. Lake Monroe puts moisture in the air that Orlando’s drier subdivisions do not feel the same way. Older roofs downtown and newer roofs on the edges need different attention.',
		housing:
			'Downtown and the nearby historic streets have older houses, some with complex roofs and prior repairs. The outer neighborhoods are typical Central Florida shingle houses. Both are residential work.',
		weather:
			'Humidity off Lake Monroe lingers. Storms cross Seminole County and can drive rain at older flashing. Wind on the more open newer streets lifts edges the way it does in Oviedo.',
		issues: [
			'Moisture and prior repairs on historic-area roofs',
			'Flashing that predates the current shingles',
			'Storm-lifted shingles in newer sections of the city',
		],
		nearby: ['oviedo-fl', 'casselberry-fl', 'altamonte-springs-fl', 'orlando-fl'],
		faqs: [
			{
				question: 'Are historic Sanford houses treated differently?',
				answer:
					'The inspection is more careful around old flashing and additions. The advice is the same kind of advice: repair, replace, or leave it.',
			},
			{
				question: 'Does lake humidity mean my roof is failing?',
				answer:
					'No. Humidity is context. Algae or a musty attic is a clue, not a verdict.',
			},
		],
	},
	{
		slug: 'apopka-fl',
		name: 'Apopka',
		county: 'Orange County',
		region: 'central-florida',
		description:
			'Apopka roofing contractor for older grove-town streets and the subdivisions that replaced them. Wind, open lots, and Wekiva-edge shade.',
		intro:
			'Apopka used to be groves. A lot of it is houses now, and the roofs are a mix of older in-town shingles and newer subdivision roofs. Open lots take wind. The Wekiva edge takes shade and moisture.',
		housing:
			'In town, houses and roofs have more years on them. On the edges, production homes repeat architectural shingles. Some larger lots still have outbuildings with their own small roofs that leak into the same conversation.',
		weather:
			'Northwest Orange County storms move across open ground. Wind has room. Near the Wekiva side, trees and wetter air change what the shingles look like after the same storm.',
		issues: [
			'Wind on open subdivision exposures',
			'Older in-town roofs with brittle shingles',
			'Shade and debris closer to the Wekiva edge',
		],
		nearby: ['winter-garden-fl', 'orlando-fl', 'altamonte-springs-fl'],
		faqs: [
			{
				question: 'Do you look at detached roofs on an Apopka property?',
				answer:
					'Mention them when you call. The house is the priority. A shed or garage roof can be part of the same visit when it makes sense.',
			},
			{
				question: 'Is Apopka part of the Orlando roofing area?',
				answer:
					'Yes. It is far enough northwest to deserve its own notes, and it is still Central Florida work for Joe.',
			},
		],
	},
]
