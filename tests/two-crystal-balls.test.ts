import {twoCrystalBalls} from "../src/two-crystal-balls/two-crystal-balls";

describe('Two Crystal Balls Algorithm', () =>{
  it('should find high enough index', () => {
    const arr = [false, false, false, false, false, false, false, false, false, true, true, true, true]
    const crystalBall = twoCrystalBalls(arr)

    expect(crystalBall).toBe(9)
  });

  it('should return -1 if no true value', () => {
    const arr = [false, false, false, false, false, false, false, false, false]
    const crystalBall = twoCrystalBalls(arr)

    expect(crystalBall).toBe(-1)
  });

  it('should return 0 if first value is true', () => {
    const arr = [true, true, true, true, true, true, true, true, true]
    const crystalBall = twoCrystalBalls(arr)

    expect(crystalBall).toBe(0)
  });
})