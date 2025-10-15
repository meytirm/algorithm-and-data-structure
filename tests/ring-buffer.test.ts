import {RingBuffer} from "../src/ring-buffer/ring-buffer";

describe('RingBuffer', () => {
  it('should enqueue and dequeue', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Prevent actual log

    const ringBuffer = new RingBuffer(3)
    ringBuffer.enqueue(1)
    expect(ringBuffer.dequeue()).toBe(1)
    expect(ringBuffer.dequeue()).toBe(undefined)
    ringBuffer.enqueue(2)
    ringBuffer.enqueue(3)
    ringBuffer.enqueue(4)
    ringBuffer.enqueue(5)
    expect(logSpy).toHaveBeenCalledWith('Ring Buffer is full.')
    logSpy.mockRestore()
    expect(ringBuffer.isFull()).toBe(true)
    ringBuffer.dequeue()
    ringBuffer.dequeue()
    ringBuffer.dequeue()
    expect(ringBuffer.dequeue()).toBe(undefined)
    expect(ringBuffer.isEmpty()).toBe(true)
    expect(ringBuffer.isFull()).toBe(false)
    ringBuffer.enqueue(1)
    expect(ringBuffer.peek()).toBe(1)
    ringBuffer.clear()
    expect(ringBuffer.isEmpty()).toBe(true)
  })
});