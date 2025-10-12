import {Stack} from "../src/stack/stack";

describe('Stack', () => {
  it ('should push and pop', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.peek()).toBe(1)
    stack.pop()
    expect(stack.peek()).toBe(undefined)
    stack.push(2)
    expect(stack.peek()).toBe(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
    stack.pop()
    expect(stack.peek()).toBe(2)
  })
});