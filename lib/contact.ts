import { site } from '@/content/site'

export function digitsOnly(phone: string) {
	return phone.replace(/[^\d+]/g, '')
}

export function hasPhone() {
	return digitsOnly(site.phone).length > 0
}

export function dialable(phone: string) {
	const digits = digitsOnly(phone).replace(/^\+/, '')
	if (digits.length === 10) return `+1${digits}`
	if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
	return digits
}

export function callHref() {
	if (!hasPhone()) return '/contact#inspection'
	return `tel:${dialable(site.phone)}`
}

export function textHref() {
	if (!hasPhone()) return '/contact#inspection'
	return `sms:${dialable(site.phone)}`
}

export function inspectionHref() {
	return '/contact#inspection'
}
