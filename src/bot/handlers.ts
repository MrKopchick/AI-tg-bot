import { bot } from "./bot";

export const registerHandlers = () => {
  bot.command("start", async (ctx) => {
    await ctx.reply("Hello");
  });

  bot.on("message:text", async (ctx) => {
    await ctx.reply("Got your message");
  });
};