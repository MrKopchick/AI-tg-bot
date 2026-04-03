import 'dotenv/config';
import { ContextErrorMessage } from './libs/enums/enums';

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(ContextErrorMessage.ENV_VARIABLE_NOT_FOUND + key);
  }
  return value;
};

export const config = {
  telegram: {
    token: getEnv('TELEGRAM_BOT_TOKEN'),
  },
  isDev: process.env.NODE_ENV === 'development',
};

export type Config = typeof config;
