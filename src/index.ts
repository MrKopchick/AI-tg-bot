import { Bot } from "grammy";
import { bot } from "./bot";
import { globalContext, YCContext } from "./config/context";
import { BotErrorMessage, BotStatusMessage, BotCode } from "./lib/enums/enums";

export const handler = async function (event: any, context: YCContext) {
  globalContext.context = context;

  try {
    await bot.init();
    await bot.handleUpdate(JSON.parse(event.body));
  } catch (e) {
    console.error(BotErrorMessage.FAILED_TO_HANDLE_UPDATE, (e as Error).message);
  }

  return { statusCode: BotCode.OK, body: "" };
};


if(process.env.NODE_ENV === "development") {
  bot.start({onStart: () => {
    console.log(BotStatusMessage.STARTED);
  }});
}
