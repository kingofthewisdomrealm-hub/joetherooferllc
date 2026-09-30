export interface NavItem {
	href: string
	label: string
}

export const navItems: NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/roofing', label: 'Roofing' },
	{ href: '/storm-damage', label: 'Storm Damage' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About Joe' },
	{ href: '/service-areas', label: 'Service Areas' },
	{ href: '/contact', label: 'Contact' },
]
