import {Queue} from "../src/queue/queue";

describe('Queue', () => {
  it('should enqueue, dequeue and peek', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.peek()).toBe(1)
    if (queue.tail) {
      expect(queue.tail.value).toBe(1)
    }
    if (queue.head) {
      expect(queue.head.value).toBe(1)
    }
    queue.enqueue(2)
    expect(queue.peek()).toBe(1)
    queue.dequeue()
    expect(queue.peek()).toBe(2)
    queue.dequeue()
    expect(queue.peek()).toBe(undefined)
  })
});