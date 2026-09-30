'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { CallJoe } from '@/components/call-link'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navItems } from '@/content/navigation'
import { site } from '@/content/site'

export function SiteHeader() {
	return (
		<header className='sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8'>
				<Link href='/' className='min-w-0'>
					<span className='block font-heading text-xl leading-none text-ink md:text-2xl'>
						Joe the Roofer
					</span>
					<span className='mt-1 block text-[11px] tracking-wide text-muted-foreground uppercase'>
						Backed by {site.covenantName}
					</span>
				</Link>
				<nav className='hidden items-center gap-6 lg:flex' aria-label='Primary'>
					{navItems
						.filter((item) => item.href !== '/')
						.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='text-sm text-foreground/80 transition hover:text-foreground'
							>
								{item.label}
							</Link>
						))}
				</nav>
				<div className='flex items-center gap-2'>
					<CallJoe className='hidden h-11 px-5 sm:inline-flex' />
					<Sheet>
						<SheetTrigger
							render={
								<Button variant='outline' size='icon' className='rounded-full lg:hidden' />
							}
							aria-label='Open menu'
						>
							<Menu />
						</SheetTrigger>
						<SheetContent side='right' className='w-[min(100%,22rem)] bg-background'>
							<SheetHeader>
								<SheetTitle className='font-heading text-2xl'>Joe the Roofer</SheetTitle>
							</SheetHeader>
							<nav className='flex flex-col gap-1 px-4' aria-label='Mobile'>
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className='rounded-2xl px-3 py-3 text-lg hover:bg-muted'
									>
										{item.label}
									</Link>
								))}
							</nav>
							<div className='px-4 pt-4'>
								<CallJoe className='w-full' />
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
