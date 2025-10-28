import binarySearch from "../src/binary-search/binary-search";
import binarySearchRecursion from "../src/binary-search/binary-search-recursion";

test("binarySearch finds existing element", () => {
  expect(binarySearch([1, 3, 5, 7], 1)).toBe(0);
  expect(binarySearchRecursion([1, 3, 5, 7], 1)).toBe(0);
});
