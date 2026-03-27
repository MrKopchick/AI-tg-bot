import "dotenv/config";
import { BotErrorMessage } from "../lib/enums/enums";

export const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error(BotErrorMessage.BOT_TOKEN_NOT_FOUND);
}