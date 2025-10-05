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

class DoubleNode<T> implements NodeInterface<T> {
  value: T;
  next: DoubleNode<T> | null;
  prev: DoubleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> implements LinkedListInterface<T> {
  head: DoubleNode<T> | null;
  tail: DoubleNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  append(value: T) {
    const newNode = new DoubleNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.next = newNode
      newNode.prev = currentTail
      this.tail = newNode;
    }
  }

  prepend(value: T) {
    const newNode = new DoubleNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const currentHead = this.head;
    if (currentHead) {
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    }
  }

  get(value: T): DoubleNode<T> | null {
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
    if (this.isEmpty()) return;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const prev = current.prev;
        const next = current.next;
        if (prev) {
          prev.next = next
        }
        if (next) {
          next.prev = prev
        }
        if (current === this.head) {
          this.head = next
        }
        if (current === this.tail) {
          this.tail = prev
        }
        return;
      }
      current = current.next;
    }
  }
}
