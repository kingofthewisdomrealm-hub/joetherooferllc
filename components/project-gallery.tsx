import { projects } from '@/content/projects'
import { PhotoGrid } from '@/components/photo-grid'

export function ProjectGallery() {
	if (!projects.length) {
		return (
			<div className='grid gap-8'>
				<p className='max-w-2xl text-muted-foreground'>
					These are real roof photos. A project entry with the city, roof type, problem, and what
					was done is added only when those details are confirmed. Nothing here is a sample job.
				</p>
				<PhotoGrid />
			</div>
		)
	}

	return (
		<div className='grid gap-8'>
			{projects.map((project) => (
				<article key={project.slug} className='rounded-3xl border border-border bg-card p-6'>
					<p className='text-sm text-muted-foreground'>{project.city}</p>
					<h3 className='mt-2 font-heading text-3xl'>{project.roofType}</h3>
					<p className='mt-4'>{project.problem}</p>
					<p className='mt-2 text-muted-foreground'>{project.solution}</p>
				</article>
			))}
		</div>
	)
}
