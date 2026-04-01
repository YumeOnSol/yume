export interface YumeConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface GenerateOptions {
  prompt: string;
  nsfw?: boolean;
  size?: '832x1216' | '1024x1024' | '1216x832';
}

export interface GenerateResult {
  id: string;
  imageUrl: string;
  prompt: string;
  creditsRemaining?: number;
}

export interface InspireOptions {
  nsfw?: boolean;
  theme?: string;
}

export interface InspireResult {
  prompt: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  prompt: string;
  wallet?: string;
  nsfw: boolean;
  createdAt: string;
}

export interface GalleryOptions {
  wallet?: string;
  limit?: number;
}

export class YumeClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: YumeConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://api.yume.wtf';
  }

  /**
   * Generate an AI anime image
   */
  async generate(options: GenerateOptions): Promise<GenerateResult> {
    const res = await fetch(`${this.baseUrl}/v1/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      body: JSON.stringify({
        prompt: options.prompt,
        nsfw: options.nsfw ?? false,
        size: options.size || '832x1216',
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new YumeError(err.error || `HTTP ${res.status}`, res.status);
    }

    const data = await res.json();
    return {
      id: data.id,
      imageUrl: data.image_url,
      prompt: data.prompt,
      creditsRemaining: data.credits_remaining,
    };
  }

  /**
   * Get AI-generated prompt inspiration
   */
  async inspire(options?: InspireOptions): Promise<InspireResult> {
    const res = await fetch(`${this.baseUrl}/v1/inspire`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      body: JSON.stringify({
        nsfw: options?.nsfw ?? false,
        theme: options?.theme,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new YumeError(err.error || `HTTP ${res.status}`, res.status);
    }

    const data = await res.json();
    return { prompt: data.prompt };
  }

  /**
   * Browse the community gallery
   */
  async gallery(options?: GalleryOptions): Promise<GalleryItem[]> {
    const params = new URLSearchParams();
    if (options?.wallet) params.set('wallet', options.wallet);
    if (options?.limit) params.set('limit', String(options.limit));

    const res = await fetch(`${this.baseUrl}/v1/gallery?${params}`, {
      headers: { 'X-API-Key': this.apiKey },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new YumeError(err.error || `HTTP ${res.status}`, res.status);
    }

    const data = await res.json();
    return data.items || [];
  }

  /**
   * Check API health
   */
  async health(): Promise<{ status: string; engine: string }> {
    const res = await fetch(`${this.baseUrl}/v1/health`);
    return res.json();
  }
}

export class YumeError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'YumeError';
    this.status = status;
  }
}

export default YumeClient;
