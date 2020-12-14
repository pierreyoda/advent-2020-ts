import { computePartOne, computePartTwo } from "./main"

// @ponicode
describe("Day 1 Unit Tests", () => {
    test("it should compute properly the solution for Part 1", () => {
        expect(computePartOne([
          2019,
          1,
        ])).toEqual(2019);
        expect(computePartOne([
          1721,
          979,
          366,
          299,
          675,
          1456,
        ])).toEqual(1721 * 299);
    });

    test("it should compute properly the solution for Part 2", () => {
      expect(computePartTwo([
        2018,
        1,
        1,
      ])).toEqual(2018);
      expect(computePartTwo([
        1721,
        979,
        366,
        299,
        675,
        1456,
      ])).toEqual(979 * 366 * 675);
    });
})
