import type { Faq } from '@/content/locations/types'

export function FaqList({ faqs }: { faqs: Faq[] }) {
	return (
		<div className='divide-y divide-border rounded-3xl border border-border bg-card'>
			{faqs.map((faq) => (
				<details key={faq.question} className='group px-6 py-4'>
					<summary className='cursor-pointer list-none font-medium text-ink'>
						{faq.question}
					</summary>
					<p className='pt-3 text-sm leading-relaxed text-muted-foreground'>{faq.answer}</p>
				</details>
			))}
		</div>
	)
}
