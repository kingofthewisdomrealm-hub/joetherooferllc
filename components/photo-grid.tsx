import Image from 'next/image'
import { photos } from '@/content/photos'

export function PhotoGrid() {
	return (
		<div className='grid gap-4 sm:grid-cols-2'>
			{photos.map((photo, index) => (
				<div
					key={photo.src}
					className={`relative overflow-hidden rounded-3xl bg-muted ${index === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}
				>
					<Image
						src={photo.src}
						alt={photo.alt}
						fill
						className='object-cover'
						sizes={index === 0 ? '100vw' : '(min-width: 640px) 50vw, 100vw'}
					/>
				</div>
			))}
		</div>
	)
}
