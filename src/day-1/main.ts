import { instantiateLogger } from "../utils/logger";
import { isDefined, withScaffolding } from "../utils/scaffolding";

export const computePartOne = (
  inputs: readonly number[],
): number | null => {
  const seen = new Set<number>();
  for (const n of inputs) {
    const comp = 2020 - n;
    if(seen.has(comp)) {
      return n * comp;
    }
    seen.add(n);
  }
  return null;
};

export const computePartTwo = (
  inputs: readonly number[],
): number | null => {
  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs.length; j++) {
      for (let k = 0; k < inputs.length; k++) {
        const [x, y, z] = [inputs[i], inputs[j], inputs[k]];
        if (x + y + z !== 2020) { continue; }
        return x * y * z;
      }
    }
  }
  return null;
};

const runDayOne = withScaffolding(
  "part-1",
  "./src/day-1/input.txt",
  "\n",
  instantiateLogger("day-1"),
  async inputs => {
    const results: readonly number[] = [
      computePartOne(inputs),
      computePartTwo(inputs),
    ].filter(isDefined);
    if (results.length < 1) {
      throw new Error("No results found!");
    }
    return results;
  },
);

export default runDayOne;
