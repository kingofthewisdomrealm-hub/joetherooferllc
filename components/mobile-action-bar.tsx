import Link from 'next/link'
import { CallJoe, TextJoe } from '@/components/call-link'
import { hasPhone, inspectionHref } from '@/lib/contact'

export function MobileActionBar() {
	if (!hasPhone()) {
		return (
			<div className='fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden'>
				<CallJoe className='w-full'>Have Joe check my roof</CallJoe>
			</div>
		)
	}

	return (
		<div className='fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden'>
			<CallJoe className='h-11 px-2 text-sm' />
			<TextJoe className='h-11 px-2 text-sm' />
			<Link
				href={inspectionHref()}
				className='inline-flex h-11 items-center justify-center rounded-full bg-ink px-2 text-sm text-paper'
			>
				Free Inspection
			</Link>
		</div>
	)
}
