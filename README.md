# Joe the Roofer LLC

Production site for [joetherooferllc.com](https://joetherooferllc.com). Family-owned roofing, backed by Covenant Builders.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_PHONE` | Turns Call Joe and Text into real `tel:` and `sms:` links |
| `NEXT_PUBLIC_EMAIL` | Public email in the footer and schema |
| `NEXT_PUBLIC_COVENANT_URL` | Outbound link for Covenant Builders. Hidden until set |
| `NEXT_PUBLIC_FACEBOOK_URL` | Footer link. Hidden until set |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Footer link. Hidden until set |
| `LEAD_WEBHOOK_URL` | Server-only URL that receives inspection requests as JSON |

Without `NEXT_PUBLIC_PHONE`, Call Joe opens the inspection form. Without `LEAD_WEBHOOK_URL`, the form accepts requests in development and refuses them in production so a homeowner is not told a message was delivered when it was not.

The webhook body is:

```json
{
  "name": "",
  "phone": "",
  "email": "",
  "address": "",
  "message": "",
  "submittedAt": ""
}
```

Point that URL at email, SMS, a CRM, or Supabase when you are ready. No vendor is installed in this repo.

## Still needed from the owner

Do not invent these. Add them in config or env when they are real.

- Public phone and email
- Covenant Builders website URL
- Street address, if it should be public
- Licenses, certifications, and warranties (`content/site.ts` → `credentials`)
- Family names, years, and biography (`app/about/page.tsx`)
- Reviews (`content/reviews.ts`)
- Project stories: city, roof type, problem, solution, photos (`content/projects.ts`)
- Storm-date pages (`content/storms.ts`)
- Social profile URLs

Roof photos already on the site were supplied for this project. They are not labeled as a specific city or job.

## Deploy on Vercel

The domain stays registered at Porkbun. This project does not transfer it.

1. Push this repository to GitHub.
2. Import it in Vercel. Framework is Next.js (`vercel.ts`).
3. Add the environment variables above.
4. In the Vercel project, add `joetherooferllc.com` and `www.joetherooferllc.com`.
5. In Porkbun, open the domain → DNS. Use the records Vercel shows. They are usually:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
6. Remove any older `A`, `ALIAS`, or `CNAME` records on `@` and `www` that conflict.
7. Wait for DNS, then confirm HTTPS on the Vercel domain screen.

Registration stays at Porkbun. Only the DNS records point the name at Vercel.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
