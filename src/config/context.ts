import { Config, config } from './config';

export interface AppContext {
  readonly config: Config;
}

export const globalContext: AppContext = {
  config: config,
};
