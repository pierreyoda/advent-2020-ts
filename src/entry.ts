/* eslint-disable no-await-in-loop */

export const doneDays = [
  1,
] as const;

const main = async () => {
  for (const doneDay of doneDays) {
    const dayModule = await import(`./day-${doneDay}/main`);
    await dayModule.default();
  }
};

main();
