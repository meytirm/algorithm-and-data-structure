export default function quickSortInPlace (arr: number[]) {
  quickSort(arr, 0, arr.length - 1)
}

function quickSort(arr: number[], low: number, high: number) {}
function partition(arr: number[], low: number, high: number) {
  const pivot = arr[high]

  let index = low - 1

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++
      const temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }

  index++
  arr[high] = arr[index]
  arr[index] = pivot
  return index
}