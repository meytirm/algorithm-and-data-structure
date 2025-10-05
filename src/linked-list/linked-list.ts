interface NodeInterface<T> {
  value: T;
  next: NodeInterface<T> | null;
  prev: NodeInterface<T> | null;
}

interface LinkedListInterface<T> {
  head: NodeInterface<T> | null;
  tail: NodeInterface<T> | null;

  isEmpty(): boolean;

  get(value: T): NodeInterface<T> | null;

  append(value: T): void;

  prepend(value: T): void

  remove(value: T): void;
}

class SingleNode<T> implements NodeInterface<T> {
  value: T;
  next: SingleNode<T> | null;
  prev: SingleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> implements LinkedListInterface<T> {
  head: SingleNode<T> | null;
  tail: SingleNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  append(value: T) {
    const newNode = new SingleNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.next = newNode
      this.tail = newNode;
    }
  }

  prepend(value: T) {
    const newNode = new SingleNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const currentHead = this.head;
    if (currentHead) {
      currentHead.prev = newNode;
      this.head = newNode;
    }
  }

  get(value: T): SingleNode<T> | null {
    if (!this.isEmpty()) {
      let current = this.head
        while (current) {
          if (current.value === value) {
            return current;
          }
          current = current.next;
        }
    }
    return null;
  }

  remove(value: T) {
  }
}
