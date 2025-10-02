import {debounce} from "../src/debounce/debounce";

describe('debounce', () => {
  it('should return after 200 ms', () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 200);

    expect(mockFn).not.toHaveBeenCalled();
  });
})