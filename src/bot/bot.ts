import { Bot } from "grammy";
import { BotContext } from "./libs/types/types";
import { globalContext } from "../config/context";

export const bot = new Bot<BotContext>(globalContext.config.telegram.token);
