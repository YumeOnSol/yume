/**
 * Yume SDK — Telegram Bot Example
 *
 * Create a Telegram bot that generates anime images.
 *
 * Install:
 *   npm install @yume-wtf/sdk grammy
 *
 * Set env vars:
 *   TELEGRAM_TOKEN=your_bot_token
 *   YUME_API_KEY=yume_sk_xxxxx
 */

const { Bot } = require('grammy');
const { YumeClient } = require('@yume-wtf/sdk');

const bot = new Bot(process.env.TELEGRAM_TOKEN);
const yume = new YumeClient({ apiKey: process.env.YUME_API_KEY });

bot.command('start', (ctx) => {
  ctx.reply(
    '🌙 Welcome to Yume Bot!\n\n' +
    'Send me a prompt and I\'ll dream it for you.\n\n' +
    'Example: silver hair girl, purple eyes, moonlit garden\n\n' +
    '/nsfw - Toggle NSFW mode\n' +
    '/inspire - Get prompt inspiration'
  );
});

// Track NSFW per user
const nsfwUsers = new Set();

bot.command('nsfw', (ctx) => {
  const userId = ctx.from.id;
  if (nsfwUsers.has(userId)) {
    nsfwUsers.delete(userId);
    ctx.reply('🌙 NSFW mode OFF');
  } else {
    nsfwUsers.add(userId);
    ctx.reply('🔥 NSFW mode ON');
  }
});

bot.command('inspire', async (ctx) => {
  const nsfw = nsfwUsers.has(ctx.from.id);
  const result = await yume.inspire({ nsfw });
  ctx.reply(`✨ Try this prompt:\n\n${result.prompt}`);
});

bot.on('message:text', async (ctx) => {
  const prompt = ctx.message.text;
  if (prompt.startsWith('/')) return;

  await ctx.reply('🌙 Dreaming...');

  try {
    const nsfw = nsfwUsers.has(ctx.from.id);
    const result = await yume.generate({ prompt, nsfw });
    await ctx.replyWithPhoto(result.imageUrl, {
      caption: `🌙 ${prompt.slice(0, 100)}`,
    });
  } catch (err) {
    ctx.reply(`❌ ${err.message}`);
  }
});

bot.start();
console.log('🌙 Yume Telegram Bot running!');
