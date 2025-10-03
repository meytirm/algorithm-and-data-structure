import {twoCrystalBalls} from "../src/two-crystal-balls/two-crystal-balls";

describe('Two Crystal Balls Algorithm', () =>{
  it('should find high enough index', () => {
    const arr = [false, false, false, false, false, false, false, false, false, true, true, true, true]
    const crystalBall = twoCrystalBalls(arr)

    expect(crystalBall).toBe(8)
  });
})