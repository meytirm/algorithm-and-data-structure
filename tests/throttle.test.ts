import {throttle} from "../src/throttle/throttle";

describe('throttle', () => {
  it('should call the function immediately', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 200)
    throttled('hello')
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('hello')
  })

  it("should not call the function again within the delay", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 200);

    throttled("a");
    throttled("b");
    throttled("c");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });


  it("should call again after delay has passed", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 200);
    jest.useFakeTimers()

    throttled("first");

    jest.advanceTimersByTime(199);
    throttled("second");

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(2);
    throttled("third");

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith("third");
  });
})