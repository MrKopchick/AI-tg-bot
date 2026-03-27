import { bot } from "./bot/bot";
import { initBot } from "./bot/init";
import { BotStatusMessage, BotErrorMessage } from "./lib/enums/enums";

(async () => {
  try {
    await initBot();

    await bot.start({
      onStart: () => {
        console.log(BotStatusMessage.STARTED);
      },
    });

  } catch (error) {
    console.error(BotErrorMessage.BOT_FAILED_TO_START, error);
  }
})();
