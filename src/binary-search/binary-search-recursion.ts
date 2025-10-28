export default function binarySearchRecursion(arr: number[], target: number) {
  return binarySearch(arr, target, 0, arr.length - 1)
}

function binarySearch(arr: number[], target: number, low: number, high: number) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] == target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1)
  }
  if (arr[mid] < target) {
    binarySearch(arr, target, mid + 1, high)
  }
}