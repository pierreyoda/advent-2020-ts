import chalk from "chalk";
import debugLib from "debug";

export const instantiateLogger = () => (label: string) => {
  const debug = debugLib(`advent-2020-ts:${label}`);
  return {
    info: (text: string) => debug(chalk.blue(text)),
    error: (text: string) => debug(chalk.red(text)),
    warn: (text: string) => debug(chalk.yellow(text)),
    success: (text: string) => debug(chalk.green(text)),
  };
};

export type Logger = ReturnType<ReturnType<typeof instantiateLogger>>;
