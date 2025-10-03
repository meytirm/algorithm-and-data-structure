export function twoCrystalBalls(arr: boolean[]) {
  const rootOfFloors = Math.floor(Math.sqrt(arr.length))
  let foundBrokenFloorIndex = 0

  for (let i = 0; i < arr.length; i+=rootOfFloors) {
    if (arr[i]) {
      foundBrokenFloorIndex = i
      break
    }
  }

  for (let i = foundBrokenFloorIndex - rootOfFloors; i < arr.length; i++) {
    if (arr[i]) {
      return i
    }
  }

  return -1
}