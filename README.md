<<<<<<< HEAD
# NusaOps WhatsApp AI Chatbot Platform

Production-grade, multi-tenant WhatsApp AI chatbot platform.

## Architecture
- Backend: FastAPI, PostgreSQL, Redis, pgvector, Celery
- Frontend: Next.js (Admin Dashboard)
- AI: Google Gemini, OpenAI Fallback
- Platform: Meta WhatsApp Cloud API

## Setup

1. Copy `.env.example` to `.env` in the backend folder.
2. Run `docker-compose up -d` to start the infrastructure.
3. Access backend API at `http://localhost:8000`
4. Access dashboard at `http://localhost:3000`

## Development
See backend and dashboard directories for their respective readmes.
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> origin/main
