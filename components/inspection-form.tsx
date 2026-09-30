'use client'

import { useActionState } from 'react'
import { submitInspection, type InspectionState } from '@/app/actions/inspection'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const initialState: InspectionState = { ok: false, done: false }

const fields = [
	{ name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
	{ name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
	{ name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
	{
		name: 'address',
		label: 'Property address',
		type: 'text',
		autoComplete: 'street-address',
	},
] as const

export function InspectionForm() {
	const [state, action, pending] = useActionState(submitInspection, initialState)

	if (state.done) {
		return (
			<div className='rounded-3xl border border-border bg-card p-8 shadow-sm' role='status'>
				<p className='font-heading text-3xl text-ink'>Joe has the request.</p>
				<p className='mt-3 text-muted-foreground'>
					Someone will follow up at the phone or email you gave. If water is coming in right now,
					call as well.
				</p>
			</div>
		)
	}

	return (
		<form id='inspection' action={action} className='rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8'>
			<div className='absolute -left-[9999px]' aria-hidden='true'>
				<label>
					Company
					<input name='company' tabIndex={-1} autoComplete='off' />
				</label>
			</div>
			<div className='grid gap-4'>
				{fields.map((field) => (
					<div key={field.name} className='grid gap-2'>
						<Label htmlFor={field.name}>{field.label}</Label>
						<Input
							id={field.name}
							name={field.name}
							type={field.type}
							autoComplete={field.autoComplete}
							required
							aria-invalid={Boolean(state.fieldErrors?.[field.name])}
							className='h-12 rounded-xl bg-background px-4'
						/>
						{state.fieldErrors?.[field.name] ? (
							<p className='text-sm text-destructive'>{state.fieldErrors[field.name]}</p>
						) : null}
					</div>
				))}
				<div className='grid gap-2'>
					<Label htmlFor='message'>What happened / How can Joe help?</Label>
					<Textarea
						id='message'
						name='message'
						required
						rows={5}
						aria-invalid={Boolean(state.fieldErrors?.message)}
						className='min-h-32 rounded-xl bg-background px-4 py-3'
						placeholder='Leak, storm, second opinion, or you are not sure yet.'
					/>
					{state.fieldErrors?.message ? (
						<p className='text-sm text-destructive'>{state.fieldErrors.message}</p>
					) : null}
				</div>
			</div>
			{state.error ? <p className='mt-4 text-sm text-destructive'>{state.error}</p> : null}
			<button
				type='submit'
				disabled={pending}
				className='mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 disabled:opacity-60'
			>
				{pending ? 'Sending…' : 'Have Joe Check My Roof'}
			</button>
			<p className='mt-4 text-sm text-muted-foreground'>
				This asks Joe to look at the roof. It is not a contract, and it is not an insurance claim.
			</p>
		</form>
	)
}
