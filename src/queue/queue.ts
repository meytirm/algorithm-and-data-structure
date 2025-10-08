interface QueueNodeInterface<T> {
  value: T;
  next: QueueNodeInterface<T>;
}

interface QueueInterface<T> {
  head: QueueNodeInterface<T> | undefined;
  tail: QueueNodeInterface<T> | undefined;

  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}

class Queue<T> implements QueueInterface<T> {
  head: QueueNodeInterface<T> | undefined;
  tail: QueueNodeInterface<T> | undefined;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(value: T) {
  }
  dequeue() {
  }
  peek() {
  }
}