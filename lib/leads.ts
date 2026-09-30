export interface Lead {
	name: string
	phone: string
	email: string
	address: string
	message: string
	submittedAt: string
}

export interface LeadResult {
	ok: boolean
	error?: string
}

export async function deliverLead(lead: Lead): Promise<LeadResult> {
	const url = process.env.LEAD_WEBHOOK_URL

	if (!url) {
		if (process.env.NODE_ENV === 'development') {
			console.info('Inspection request received. Set LEAD_WEBHOOK_URL to deliver it.')
			return { ok: true }
		}

		return {
			ok: false,
			error:
				'The inspection form is not connected yet. Use the phone number once it is published, or try again after the form is hooked up.',
		}
	}

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(lead),
			signal: AbortSignal.timeout(8000),
		})

		if (!response.ok) {
			return {
				ok: false,
				error: 'That request did not go through. Please try again in a minute.',
			}
		}

		return { ok: true }
	} catch {
		return {
			ok: false,
			error: 'That request did not go through. Please try again in a minute.',
		}
	}
}
