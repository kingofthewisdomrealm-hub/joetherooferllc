'use server'

import { deliverLead } from '@/lib/leads'
import { z } from 'zod'

const inspectionSchema = z.object({
	name: z.string().trim().min(2, 'Add your name'),
	phone: z.string().trim().min(7, 'Add a phone number'),
	email: z
		.string()
		.trim()
		.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Add a real email'),
	address: z.string().trim().min(5, 'Add the property address'),
	message: z.string().trim().min(4, 'Tell Joe what is happening'),
})

export interface InspectionState {
	ok: boolean
	done: boolean
	error?: string
	fieldErrors?: Record<string, string>
}

export async function submitInspection(
	_previous: InspectionState,
	formData: FormData,
): Promise<InspectionState> {
	if (String(formData.get('company') || '').trim()) {
		return { ok: true, done: true }
	}

	const parsed = inspectionSchema.safeParse({
		name: formData.get('name'),
		phone: formData.get('phone'),
		email: formData.get('email'),
		address: formData.get('address'),
		message: formData.get('message'),
	})

	if (!parsed.success) {
		const fieldErrors: Record<string, string> = {}
		for (const issue of parsed.error.issues) {
			const key = String(issue.path[0] || 'form')
			if (!fieldErrors[key]) fieldErrors[key] = issue.message
		}
		return {
			ok: false,
			done: false,
			error: 'Check the form and try again.',
			fieldErrors,
		}
	}

	const result = await deliverLead({
		...parsed.data,
		submittedAt: new Date().toISOString(),
	})

	if (!result.ok) {
		return { ok: false, done: false, error: result.error }
	}

	return { ok: true, done: true }
}
