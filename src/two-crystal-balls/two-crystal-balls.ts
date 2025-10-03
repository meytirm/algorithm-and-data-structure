export function twoCrystalBalls(arr: boolean[]) {
  let rootOfFloors = Math.floor(Math.sqrt(arr.length))
  let foundBrokenFloorIndex = 0

  for (let i = 0; i < arr.length; i+=rootOfFloors) {
    if (arr[rootOfFloors]) {
      foundBrokenFloorIndex = rootOfFloors
      break
    }
  }

  for (let i = foundBrokenFloorIndex - rootOfFloors; i < arr.length; i++) {
    if (arr[i]) {
      console.log(i)
      return i
    }
  }

  return -1
}