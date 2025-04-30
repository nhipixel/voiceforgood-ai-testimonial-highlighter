# VoiceForGood Frontend

This is the frontend application for **VoiceForGood** - an AI-powered testimonial highlighter for nonprofits and community organizations.

## About VoiceForGood

VoiceForGood automatically extracts the most compelling moments from long-form interviews, testimonials, and community conversations, transforming them into shareable social media content that amplifies your mission and impact. Built specifically for nonprofits, educators, activists, and grassroots initiatives who need to share authentic voices without the complexity of traditional editing tools.

## Features

- 🎯 **Smart Content Discovery** - AI identifies emotional, mission-driven segments
- 🔊 **Accessibility First** - Automatic transcription and subtitle generation
- 👥 **Speaker Focus** - Intelligent video cropping to highlight active speakers
- 📱 **Social Media Ready** - Optimized vertical clips for TikTok, Instagram, and YouTube Shorts
- ⚡ **High Performance** - GPU-accelerated video processing for quick turnaround
- 🧠 **Intelligent Analysis** - LLM-powered moment identification with Gemini 2.5 Pro
- 📊 **Scalable Processing** - Queue system with Inngest for handling user load
- 💳 **Affordable Pricing** - Credit-based system designed for limited budgets
- 💰 **Secure Payments** - Stripe integration for credit pack purchases
- 👤 **User Management** - Complete authentication system
- 📱 **Responsive Design** - Modern Next.js web interface
- 🎛️ **Dashboard** - Upload community stories and manage highlights

## Tech Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables (see `.env.example`)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Run the Inngest development server:
   ```bash
   npm run inngest-dev
   ```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.
