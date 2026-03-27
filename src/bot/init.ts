import { bot } from "./bot";
import { registerHandlers } from "./handlers";

let initialized = false;

export const initBot = async () => {
  if (initialized) return;

  registerHandlers();

  await bot.init();
  initialized = true;
};
