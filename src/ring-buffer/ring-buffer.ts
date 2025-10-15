interface RingBufferInterface<T> {
  enqueue(value: T): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  isFull(): boolean
  clear(): void
}

export class RingBuffer<T> implements RingBufferInterface<T> {
  private readonly size: number
  private head: number
  private tail: number
  private buffer: (T | undefined)[]
  private count: number
  constructor(size: number) {
    this.size = size
    this.head = 0
    this.tail = 0
    this.buffer = new Array(size)
    this.count = 0
  }
  enqueue(value: T) {
    if (!this.isFull()) {
      this.buffer[this.head] = value
      this.head = (this.head + 1) % this.size
      this.count++
      return;
    }
    console.log('Ring buffer is full.')
  }
  dequeue(): undefined | T  {if (this.isEmpty()) return undefined
    const tail = this.tail
    this.tail = (this.tail + 1) % this.size
    this.count--
    return this.buffer[tail]
  }
  peek(): undefined | T {
    return this.buffer[this.tail]
  }
  isEmpty(): boolean {
    return this.count === 0
  }
  isFull(): boolean {
    return this.count === this.size
  }
  clear() {
    this.head = 0
    this.tail = 0
    this.count = 0
    this.buffer = new Array(this.size)
  }
}