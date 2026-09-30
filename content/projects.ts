export interface ProjectPhoto {
	src: string
	alt: string
}

export interface Project {
	slug: string
	city: string
	roofType: string
	problem: string
	solution: string
	photos: ProjectPhoto[]
}

/** Add a project only when the photos and the story are real. */
export const projects: Project[] = []
