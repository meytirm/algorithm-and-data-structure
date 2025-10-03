export function twoCrystalBalls(arr: boolean[]) {
  let rootOfFloors = Math.floor(Math.sqrt(arr.length))
  let foundBrokenFloorIndex = 0

  for (let i = 0; i < arr.length; i+=rootOfFloors) {
    if (arr[rootOfFloors]) {
      foundBrokenFloorIndex = rootOfFloors
      break
    }
  }

  console.log(foundBrokenFloorIndex, rootOfFloors)
}