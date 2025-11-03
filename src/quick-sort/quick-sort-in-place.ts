export default function quickSortInPlace (arr: number[]) {
  quickSort(arr, 0, arr.length - 1)
}

function quickSort(arr: number[], low: number, high: number) {
  if (low >= high) return

  const pivotIndex = partition(arr, low, high)

  quickSort(arr, low, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, high)
}
function partition(arr: number[], low: number, high: number) {
  const pivot = arr[high]

  let i = low - 1

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      const temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    }
  }

  i++
  arr[high] = arr[i]
  arr[i] = pivot
  return i
}