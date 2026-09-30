import type { Metadata } from 'next'
import { ProjectGallery } from '@/components/project-gallery'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Roof projects',
	'Real roof photos from Joe the Roofer LLC. Project stories are added when the city, the problem, and the work are confirmed.',
	'/projects',
)

export default function ProjectsPage() {
	return (
		<div className='mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24'>
			<h1 className='font-heading text-5xl text-ink md:text-7xl'>Projects</h1>
			<p className='mt-4 max-w-2xl text-lg text-muted-foreground'>
				Before-and-after stories will list the city, roof type, problem, and solution. Until those
				details are confirmed, you get the photos without a made-up writeup.
			</p>
			<div className='mt-12'>
				<ProjectGallery />
			</div>
		</div>
	)
}
