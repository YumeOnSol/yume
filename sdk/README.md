# @yume-wtf/sdk

Official JavaScript/TypeScript SDK for the Yume AI generation API.

## Install

```bash
npm install @yume-wtf/sdk
```

## Quick Start

```typescript
import { YumeClient } from '@yume-wtf/sdk';

const yume = new YumeClient({ apiKey: 'yume_sk_xxxxx' });

// Generate an image
const result = await yume.generate({
  prompt: '1girl, silver hair, purple eyes, moonlit garden',
  nsfw: true,
});

console.log(result.imageUrl);
```

## API Reference

### `new YumeClient(config)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | `string` | required | Your API key |
| `baseUrl` | `string` | `https://api.yume.wtf` | API base URL |

### `yume.generate(options)`

Generate an AI anime image.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prompt` | `string` | required | Danbooru-style tags describing the image |
| `nsfw` | `boolean` | `false` | Enable NSFW content |
| `size` | `string` | `832x1216` | Image size (`832x1216`, `1024x1024`, `1216x832`) |

**Returns:** `{ id, imageUrl, prompt, creditsRemaining }`

### `yume.inspire(options?)`

Get AI-generated prompt inspiration.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `nsfw` | `boolean` | `false` | Generate NSFW prompt |
| `theme` | `string` | — | Theme hint (e.g. `"onsen"`, `"beach"`, `"cyberpunk"`) |

**Returns:** `{ prompt }`

### `yume.gallery(options?)`

Browse the community gallery.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `wallet` | `string` | — | Filter by wallet address |
| `limit` | `number` | `50` | Max items to return |

**Returns:** `GalleryItem[]`

### `yume.health()`

Check API status.

**Returns:** `{ status, engine }`

## Error Handling

```typescript
import { YumeClient, YumeError } from '@yume-wtf/sdk';

try {
  const result = await yume.generate({ prompt: 'test' });
} catch (err) {
  if (err instanceof YumeError) {
    console.log(err.message); // Error description
    console.log(err.status);  // HTTP status code
  }
}
```

## License

MIT
