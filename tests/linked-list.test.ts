import {LinkedList} from "../src/linked-list/linked-list";

describe('linked list', () => {
  it('should create a linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    linkedList.append(1);
    expect(linkedList.isEmpty()).toBe(false);
    const node = linkedList.get(1)

    if (node) {
      expect(node.value).toBe(1);
    }
    linkedList.remove(1)
    expect(linkedList.isEmpty()).toBe(true);
  })
});