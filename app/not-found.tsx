import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='mx-auto max-w-3xl px-5 py-24'>
			<h1 className='font-heading text-5xl text-ink'>That page is not here.</h1>
			<p className='mt-4 text-muted-foreground'>The roof pages that exist are linked from the service areas.</p>
			<Link href='/' className='mt-8 inline-block underline-offset-4 hover:underline'>
				Back home
			</Link>
		</div>
	)
}
