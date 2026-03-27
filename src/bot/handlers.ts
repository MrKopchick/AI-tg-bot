import { bot } from "./bot";
import { BotCommand, BotEvent } from "./libs/enums/enums";

export const registerHandlers = () => {
  bot.command(BotCommand.START, async (ctx) => {
    await ctx.reply("Hello");
  });

  bot.on(BotEvent.TEXT, async (ctx) => {
    await ctx.reply("Got your message");
  });
};