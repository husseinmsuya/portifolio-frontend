# Hussein Shabani Msuya — AI Engineer Portfolio

A futuristic, cinematic portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**. Backend is a **Vercel serverless function** (`/api/contact`) that sends the contact form via SMTP.

Designed to deploy on **Vercel** (frontend + serverless API in one project — no Cloudflare-only features).

---

## 1. Run locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

The contact form posts to `/api/contact`. In local dev that path only works when you run `vercel dev` (see below) — otherwise just test the UI.

```bash
npm i -g vercel
vercel dev
```

## 2. Add your profile photo

Drop your professional photo at:

```
public/profile.jpg
```

(If the file is missing, a stylish "HM" placeholder shows automatically.)

## 3. Deploy to Vercel

### Option A — Vercel Dashboard (easiest)

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects **Vite**. Leave defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add the environment variables below in **Project Settings → Environment Variables**.
5. Click **Deploy**.

### Option B — CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## 4. Environment variables (for the contact form)

Set these in Vercel (Project → Settings → Environment Variables):

| Key         | Example                       | Notes                                  |
|-------------|-------------------------------|----------------------------------------|
| `SMTP_HOST` | `smtp.gmail.com`              | Your SMTP server                       |
| `SMTP_PORT` | `587`                         | 465 for SSL, 587 for STARTTLS          |
| `SMTP_USER` | `your-gmail@gmail.com`        | SMTP username                          |
| `SMTP_PASS` | `xxxx xxxx xxxx xxxx`         | Gmail **App Password** (not real pwd)  |
| `MAIL_TO`   | `husseinmsuya898@gmail.com`   | Where contact messages are delivered   |

### Get a Gmail App Password

1. Enable 2-step verification on your Google account.
2. Visit https://myaccount.google.com/apppasswords
3. Create an app password → copy the 16-character code into `SMTP_PASS`.

After setting env vars, redeploy: **Deployments → ⋯ → Redeploy**.

## 5. Project structure

```
hussein-portfolio/
├── api/
│   └── contact.js          # Vercel serverless function (POST /api/contact)
├── public/
│   ├── favicon.svg
│   └── profile.jpg         # add your photo here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx        # Spline 3D bg + holographic profile frame
│   │   └── Sections.tsx    # About, Skills, Projects, Experience, Contact, Footer
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

## 6. Customization

- **Hero text & rotating words** → `src/components/Hero.tsx`
- **Skills / Projects / Qualifications** → `src/components/Sections.tsx`
- **Colors / glow** → `src/index.css` (CSS variables `--neon-cyan`, `--neon-purple`, etc.)
- **3D background** → `<iframe>` URL in `Hero.tsx`. Replace with any Spline scene URL.

## 7. Tech

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** with custom design tokens
- **Framer Motion 11** for animations
- **Lucide React** icons
- **Spline** embedded scene for hero 3D background
- **Nodemailer** on Vercel serverless for contact form

---

Built by Hussein Shabani Msuya · 2026
