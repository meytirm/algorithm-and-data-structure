import quickSortImmutable from '../src/quick-sort/quick-sort-immutable'
import quickSortInPlace from "../src/quick-sort/quick-sort-in-place";

describe('Quick Sort', () => {
  it('should sort', () => {
    const arr = [5, 2, 8, 3, 4]
    const sortedArray = quickSortImmutable(arr)
    expect(sortedArray).toEqual([2, 3, 4, 5, 8])
    quickSortInPlace(arr)
    expect(arr).toEqual([2, 3, 4, 5, 8])
  })
});