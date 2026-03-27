import "dotenv/config";
import { Bot } from "grammy";
import { BotContext } from "./lib/types/types";
import { BotErrorMessage } from "./lib/enums/enums";

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error(BotErrorMessage.BOT_TOKEN_NOT_FOUND);
}

export const bot = new Bot<BotContext>(BOT_TOKEN);

