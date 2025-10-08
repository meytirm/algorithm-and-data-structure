interface QueueNode<T> {
  value: T;
  next: QueueNode<T>
}

interface QueueInterface<T> {
  head: QueueNode<T> | null;
  tail: QueueNode<T> | null;

  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}

