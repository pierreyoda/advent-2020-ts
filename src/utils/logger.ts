import chalk from "chalk";
import debugLib from "debug";

export type LoggerFunction = (text: string) => void;
export interface Logger {
  info: LoggerFunction;
  warn: LoggerFunction;
  error: LoggerFunction;
  success: LoggerFunction;
}

export const instantiateLogger = (label: string): Logger => {
  const debug = debugLib(`advent-2020-ts:${label}`);
  return {
    info: (text: string) => debug(chalk.blue(text)),
    error: (text: string) => debug(chalk.red(text)),
    warn: (text: string) => debug(chalk.yellow(text)),
    success: (text: string) => debug(chalk.green(text)),
  };
};
