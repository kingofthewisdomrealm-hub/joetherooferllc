import type { Metadata } from 'next'
import { pageMeta } from '@/lib/metadata'

export const metadata: Metadata = pageMeta(
	'Privacy',
	'How Joe the Roofer LLC handles the name, phone, email, and address you send with an inspection request.',
	'/privacy',
)

export default function PrivacyPage() {
	return (
		<div className='mx-auto max-w-3xl space-y-4 px-5 py-16 text-lg leading-relaxed md:px-8 md:py-24'>
			<h1 className='font-heading text-5xl text-ink'>Privacy</h1>
			<p>
				The inspection form asks for your name, phone, email, property address, and a note about the
				roof. That information is used to respond to you.
			</p>
			<p>
				If a delivery webhook is configured, the request is sent there. If it is not, the form will
				say so instead of pretending the message was delivered.
			</p>
			<p>The site does not sell that information. It does not ask for insurance claim numbers.</p>
		</div>
	)
}
