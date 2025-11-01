import {bubbleSort} from "../src/bubble-sort/bubble-sort";

describe('bubbleSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const arr = [5, 3, 8, 4, 2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
  })
})