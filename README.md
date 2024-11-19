# ViralPostAI

AI-powered social media content generation and optimization platform built with React, TypeScript, and Supabase.

## Features

- 🤖 AI-driven content generation using GPT-4-mini
- 🖼️ Vision analysis for images
- 📊 Platform-specific optimization
- 📱 Multi-platform support (X/Twitter, Instagram, LinkedIn, Facebook, TikTok)
- 📈 Analytics dashboard
- 💳 Subscription management

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui
- **Backend:** Supabase, PostgreSQL
- **AI:** GPT-4-mini
- **Infrastructure:** Vercel, Cloudflare CDN, AWS S3
- **Payments:** Stripe

## Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/viral-post-ai.git
cd viral-post-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

## Environment Variables

```plaintext
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
VITE_GPT4_MINI_API_KEY=your_gpt4_key
VITE_API_URL=your_api_url
```

## Subscription Tiers

- **Free:** 5 posts/month, basic platforms
- **Pro:** 100 posts/month, all platforms, analytics
- **Business:** Unlimited posts, priority AI, API access

## Development

```bash
# Build
npm run build

# Preview
npm run preview

# Deploy
vercel deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)
