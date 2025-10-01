import binarySearch from "../src/binary-search/binary-search";

test("binarySearch finds existing element", () => {
  expect(binarySearch([1, 3, 5, 7], 1)).toBe(0);
});
