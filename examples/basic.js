/**
 * Yume SDK — Basic Example
 *
 * Generate an AI anime image with one function call.
 *
 * Install: npm install @yume-wtf/sdk
 * Get API key: https://yume.wtf
 */

const { YumeClient } = require('@yume-wtf/sdk');

const yume = new YumeClient({
  apiKey: 'yume_sk_your_api_key_here',
});

async function main() {
  // 1. Generate an image
  console.log('Generating...');
  const result = await yume.generate({
    prompt: '1girl, silver hair, purple eyes, elegant dress, moonlit garden',
    nsfw: false,
  });

  console.log('Image URL:', result.imageUrl);
  console.log('Credits left:', result.creditsRemaining);

  // 2. Get AI inspiration
  const inspiration = await yume.inspire({ nsfw: true, theme: 'onsen' });
  console.log('Inspired prompt:', inspiration.prompt);

  // 3. Generate from inspiration
  const result2 = await yume.generate({
    prompt: inspiration.prompt,
    nsfw: true,
  });
  console.log('NSFW Image:', result2.imageUrl);
}

main().catch(console.error);
