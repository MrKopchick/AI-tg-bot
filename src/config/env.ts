import "dotenv/config";
import { BotErrorMessage } from "../bot/libs/enums/enums";

if (!process.env.BOT_TOKEN) {
    throw new Error(BotErrorMessage.BOT_TOKEN_NOT_FOUND);
}

export const BOT_TOKEN = process.env.BOT_TOKEN; 
