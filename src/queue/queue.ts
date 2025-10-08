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

export class Queue<T> implements QueueInterface<T> {
  head: QueueNodeInterface<T> | undefined;
  tail: QueueNodeInterface<T> | undefined;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(value: T) {
    const newNode = new QueueNode(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    if (!this.head) return;
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = undefined;
      this.tail = undefined;
      return value;
    }
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }
  peek() {
    if (!this.head) return;
    return this.head.value;
  }
}