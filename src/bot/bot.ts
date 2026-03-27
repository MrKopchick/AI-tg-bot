import { Bot } from "grammy";
import { BotContext } from "../lib/types/types";
import { BOT_TOKEN } from "../config/env";

export const bot = new Bot<BotContext>(BOT_TOKEN);
