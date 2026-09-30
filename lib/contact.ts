import { site } from '@/content/site'

export function digitsOnly(phone: string) {
	return phone.replace(/[^\d+]/g, '')
}

export function hasPhone() {
	return digitsOnly(site.phone).length > 0
}

export function callHref() {
	if (!hasPhone()) return '/contact#inspection'
	return `tel:${digitsOnly(site.phone)}`
}

export function textHref() {
	if (!hasPhone()) return '/contact#inspection'
	return `sms:${digitsOnly(site.phone)}`
}

export function inspectionHref() {
	return '/contact#inspection'
}
