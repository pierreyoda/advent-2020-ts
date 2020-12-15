import { readFile } from "fs/promises";
import { performance } from "perf_hooks";

import { Logger } from "./logger";

export const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

export const loadInputsFromFile = async (
  filepath: string,
  separator: string,
): Promise<readonly number[]> => {
  const raw = (await readFile(filepath)).toString();
  return raw.split(separator).map(Number).filter(Number.isSafeInteger);
};

export const withScaffolding = (
  label: string,
  inputsFilepath: string,
  inputsSeparator: string,
  logger: Logger,
  compute: (inputs: readonly number[]) => Promise<readonly number[]>,
) => async (): Promise<void> => {
  logger.info(`${label}: parsing inputs file ${inputsFilepath}...`);
  const inputs = await loadInputsFromFile(inputsFilepath, inputsSeparator);
  logger.success("> Parsing done!");

  logger.info(`${label}: launching computation function...`);

  const t0 = performance.now();
  const results = await compute(inputs);
  const t1 = performance.now();

  logger.success(`> Computation done in ${Math.round(t1 - t0)}ms! Here are the results:`);
  for (const [i, output] of results.entries()) {
    logger.success(`>> Part ${i + 1}: ${output}`);
  }
};
