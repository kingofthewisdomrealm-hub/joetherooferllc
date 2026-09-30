import Link from 'next/link'
import type { ReactNode } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { callHref, textHref } from '@/lib/contact'
import { cn } from '@/lib/utils'

interface ActionLinkProps {
	href: string
	children: ReactNode
	className?: string
	variant?: 'primary' | 'quiet' | 'onDark'
}

export function ActionLink({ href, children, className, variant = 'primary' }: ActionLinkProps) {
	const classes = cn(
		buttonVariants({
			variant: variant === 'primary' ? 'default' : 'outline',
			size: 'lg',
		}),
		'h-12 rounded-full px-6 text-base shadow-sm transition duration-200 hover:-translate-y-0.5 active:translate-y-0',
		variant === 'onDark' &&
			'border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white',
		className,
	)

	if (href.startsWith('/')) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		)
	}

	return (
		<a href={href} className={classes}>
			{children}
		</a>
	)
}

export function CallJoe({
	className,
	children = 'Call Joe',
	variant = 'primary',
}: {
	className?: string
	children?: ReactNode
	variant?: 'primary' | 'quiet' | 'onDark'
}) {
	return (
		<ActionLink href={callHref()} className={className} variant={variant}>
			{children}
		</ActionLink>
	)
}

export function TextJoe({ className }: { className?: string }) {
	return (
		<ActionLink href={textHref()} className={className} variant='quiet'>
			Text
		</ActionLink>
	)
}
