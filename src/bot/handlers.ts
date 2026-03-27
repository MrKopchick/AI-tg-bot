import { bot } from "./bot";
import { BotCommand, BotEvent, BotReplyMessage } from "./libs/enums/enums";

export const registerHandlers = () => {
  bot.command(BotCommand.START, async (ctx) => {
    await ctx.reply(BotReplyMessage.HELLO);
  });

  bot.on(BotEvent.TEXT, async (ctx) => {
    await ctx.reply(BotReplyMessage.GOT_MESSAGE);
  });
};
