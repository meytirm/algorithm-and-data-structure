import {debounce} from "../src/debounce/debounce";

describe('debounce', () => {
  it('should not call immediately', () => {
    const mockFn = jest.fn();
    debounce(mockFn, 200);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should call after delay', () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 200);
    jest.useFakeTimers()
    debounced('hello')
    jest.advanceTimersByTime(200)


    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('hello')
  });

  it('should not call again after delay', () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 200);
    jest.useFakeTimers()
    debounced('hello')
    jest.advanceTimersByTime(150)
    debounced('bye')
    jest.advanceTimersByTime(200)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('bye')
  })
})