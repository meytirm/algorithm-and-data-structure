interface StackNodeInterface<T> {
  value: T;
  next: StackNodeInterface<T> | undefined;
}

interface StackInterface<T> {
  head: StackNodeInterface<T> | undefined;
  tail: StackNodeInterface<T> | undefined;

  push(value: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}

class StackNode<T> implements StackNodeInterface<T> {
  value: T;
  next: StackNodeInterface<T> | undefined;
  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

class Stack<T> implements StackInterface<T> {
  head: StackNodeInterface<T> | undefined;
  tail: StackNodeInterface<T> | undefined;
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  push(value: T) {
    const newNode = new StackNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    if (!this.head) return undefined;
    const value = this.head.value;
    const head = this.head.next
    if (head) {
      head.next = undefined;
    }
    this.head = head;
    return value;
  }

  peek() {
    return this.head?.value;
  }
}