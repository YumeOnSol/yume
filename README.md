# Yume ($YUME)

> The uncensored AI anime engine on Solana.
> **No filters. No limits. Just dreams.**

<p align="center">
  <img src="assets/logo.webp" width="120" alt="Yume" />
</p>

<p align="center">
  <a href="https://yume.wtf">Website</a> ·
  <a href="https://app.yume.wtf">Launch App</a> ·
  <a href="https://x.com/yume_wtf">Twitter</a> ·
  <a href="#api">API Docs</a>
</p>

---

## What is Yume?

Yume is the first uncensored AI art generation engine built on Solana. While every major AI platform censors creative expression, Yume lets you generate stunning anime art with zero restrictions — powered by our proprietary **Yume Engine**.

### The Problem

| Platform | NSFW | Crypto | No GPU | Status |
|----------|------|--------|--------|--------|
| Midjourney | ❌ | ❌ | ✅ | Censored |
| DALL-E / GPT | ❌ | ❌ | ✅ | Censored |
| Civitai | ✅ | ⚠️ | ✅ | CC Banned |
| NovelAI | ✅ | ❌ | ✅ | $25/mo |
| Local SD | ✅ | — | ❌ | GPU Required |
| **Yume** | ✅ | ✅ | ✅ | **Free to start** |

### How It Works

1. **Website** — Generate at [app.yume.wtf](https://app.yume.wtf)
2. **Telegram Bot** — Generate on the go (coming soon)
3. **Developer API** — Build your own apps with our engine
4. **Twitter Agent** — 24/7 AI content machine (coming soon)

---

## $YUME Token

**Supply:** 1,000,000,000 (1B)
**Network:** Solana
**Launch:** PumpFun

### Holder Tiers

| Tier | Hold | Access |
|------|------|--------|
| **Wanderer** | Free | 3 generations/day, watermark |
| **Dreamer** | 500K $YUME | No watermark, 10/day |
| **Lucid** | 2M $YUME | Unlimited, HD quality |
| **Ethereal** | 5M $YUME | All models, priority queue |
| **Astral** | 20M $YUME | Beta features, API credits |

### Why $YUME Value Increases

```
Users Generate → Demand for $YUME → Tokens Burned → Value Increases → Repeat
```

- **Hold** — Unlock premium features by holding (no spending required)
- **Burn** — Every API purchase burns tokens permanently (deflationary)
- **Earn** — Top gallery creators earn $YUME rewards

---

## API

### Quick Start

```bash
npm install @yume-wtf/sdk
```

```javascript
import { YumeClient } from '@yume-wtf/sdk';

const yume = new YumeClient({ apiKey: 'yume_sk_xxxxx' });

const result = await yume.generate({
  prompt: '1girl, silver hair, purple eyes, moonlit garden',
  nsfw: true,
});

console.log(result.imageUrl);
// → https://cdn.yume.wtf/gen/abc123.jpg
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/generate` | Generate an image |
| `GET` | `/api/v1/gallery` | Browse gallery |
| `POST` | `/api/v1/inspire` | Get AI-generated prompt |
| `GET` | `/api/v1/health` | Health check |

### Generate

```bash
curl -X POST https://api.yume.wtf/v1/generate \
  -H "X-API-Key: yume_sk_xxxxx" \
  -d '{
    "prompt": "1girl, silver hair, purple eyes",
    "nsfw": true,
    "size": "832x1216"
  }'
```

**Response:**
```json
{
  "id": "gen_abc123",
  "image_url": "https://cdn.yume.wtf/gen/abc123.jpg",
  "credits_remaining": 49
}
```

### Pricing

| Plan | Cost | Rate Limit |
|------|------|------------|
| Free | $0 | 3/day |
| Pay-per-use | 1 $YUME/gen | 60/min |
| Unlimited | 500 $YUME/mo | 120/min |

> Full API documentation: [docs.yume.wtf](https://docs.yume.wtf)

---

## Roadmap

### Phase 1: Genesis ✅
- [x] Yume Engine v1 (proprietary AI model)
- [x] Website + app dashboard
- [x] Community gallery
- [ ] $YUME token launch on PumpFun

### Phase 2: Expansion
- [ ] Telegram generation bot
- [ ] Twitter AI agent (auto-posting)
- [ ] Token-gated premium features
- [ ] Holder tier system

### Phase 3: Infrastructure
- [ ] Public developer API
- [ ] Pay-per-use with $YUME
- [ ] Multi-model support
- [ ] Deploy your own AI agent

---

## SDK

The official JavaScript/TypeScript SDK for the Yume API.

```bash
npm install @yume-wtf/sdk
```

See [sdk/](./sdk/) for source code and [examples/](./examples/) for usage examples.

---

## Links

| | |
|---|---|
| Website | [yume.wtf](https://yume.wtf) |
| App | [app.yume.wtf](https://app.yume.wtf) |
| Twitter | [@yume_wtf](https://x.com/yume_wtf) |
| Token | $YUME on Solana |

---

## License

MIT — see [LICENSE](LICENSE)
