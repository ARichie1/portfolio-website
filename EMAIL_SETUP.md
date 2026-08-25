# Contact Form Setup (EmailJS)

The contact form (`src/lib/components/ContactForm.svelte`) sends messages
directly from the browser to your inbox using [EmailJS](https://www.emailjs.com/),
so no backend server is required — it works the same on Vercel, Render, or any
static host.

Until you complete this setup, the form will show a friendly error telling
the visitor it isn't connected yet (instead of silently failing).

## 1. Create an EmailJS account
Go to https://www.emailjs.com/ and sign up (free tier: 200 emails/month).

## 2. Connect an email service
1. In the EmailJS dashboard, go to **Email Services → Add New Service**.
2. Choose **Gmail** (or whichever provider you use) and connect
   `richardakinmade3@gmail.com`.
3. Copy the **Service ID** it generates (looks like `service_xxxxxxx`).

## 3. Create an email template
1. Go to **Email Templates → Create New Template**.
2. Set the template to send **To**: `richardakinmade3@gmail.com`.
3. Use these variables in the template body (the form sends exactly these three):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   Example template body:
   ```
   New portfolio contact from {{from_name}} ({{from_email}})

   {{message}}
   ```
4. Set **Reply-To** to `{{from_email}}` so you can hit "reply" directly.
5. Save, then copy the **Template ID** (looks like `template_xxxxxxx`).

## 4. Get your Public Key
Go to **Account → General** and copy your **Public Key**.

## 5. Add the keys to your project
Open `.env` in the project root (copy from `.env.example` if it doesn't exist)
and fill in the three values:

```
PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Restart the dev server after editing `.env` (`npm run dev`).

## 6. Set the same variables on your deployment platform
`.env` is only used locally — it's gitignored and won't be pushed. On your
host, add the same three variables as environment variables:

- **Vercel**: Project → Settings → Environment Variables
- **Render**: Service → Environment → Environment Variables

Use the exact same names (`PUBLIC_EMAILJS_SERVICE_ID`, etc.) and redeploy.

## Notes
- These are safe to expose client-side — EmailJS is designed for this, and
  the Public Key is not a secret credential; it identifies your account so
  EmailJS can rate-limit and route the request.
- The form has spam protection built in (a honeypot field invisible to real
  visitors but attractive to bots).
- If you ever want a fully server-side setup instead (e.g. using Resend),
  that's a contained swap inside `ContactForm.svelte` — just ask.
