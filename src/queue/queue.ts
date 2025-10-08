interface QueueNodeInterface<T> {
  value: T;
  next: QueueNodeInterface<T> | undefined;
}

interface QueueInterface<T> {
  head: QueueNodeInterface<T> | undefined;
  tail: QueueNodeInterface<T> | undefined;

  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}

class QueueNode<T> implements QueueNodeInterface<T> {
  value: T
  next: QueueNodeInterface<T> | undefined;
  constructor(value: T) {
    this.value = value;
    this.next = undefined
  }
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