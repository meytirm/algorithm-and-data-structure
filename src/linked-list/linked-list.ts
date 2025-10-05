interface SNode {
  value: number;
  next: SNode | null;
  prev: SNode | null;
}

interface LinkedList {
  head: SNode | null;
  tail: SNode | null;

  get(index: number): SNode | null;
  add(value: number): void;
  remove(index: number): void;
}