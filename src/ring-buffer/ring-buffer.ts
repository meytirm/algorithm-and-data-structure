interface RingBufferInterface<T> {
  readonly size: number
  enqueue(value: T): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  isFull(): boolean
  clear(): void
}

class RingBuffer<T> implements RingBufferInterface<T> {
  size: number
  constructor(size: number) {
    this.size = size
  }
  enqueue(value: T) {

  }
  dequeue(): undefined | T  {
    return
  }
  peek(): undefined | T {
    return
  }
  isEmpty(): boolean {
    return false
  }
  isFull(): boolean {
    return false
  }
  clear() {
  }
}