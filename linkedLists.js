class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    let node = new Node(val);
    let current;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.tail;

      while (current.next) {
        current = current.next;
      }
      this.tail = node;
      current.next = node;
    }
  }
  prepend(val) {
    let node = new Node(val);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      node.next = oldHead;
      this.head = node;
    }
  }
  size() {
    let sizeVal = 0;
    let nodeCurr = this.head;

    while (nodeCurr) {
      nodeCurr = nodeCurr.next;
      sizeVal++;
    }

    return sizeVal;
  }
  returnHead() {
    console.log("Head value: " + this.head.value);
  }
  returnTail() {
    console.log("Tail Value: " + this.tail.value);
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    console.log("Index at " + index + ": " + current.value);
  }
  pop() {
    let current = this.head;
    let listSize = this.size();
    for (let i = 0; i < listSize - 2; i++) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    console.log("Removed last element, new last element is " + this.tail.value);
  }
  contains(val) {
    let current = this.head;
    let hasVal = false;
    while (current.next) {
      if (current.value == val) {
        hasVal = true;
        break;
      } else {
        current = current.next;
      }
    }
    hasVal
      ? console.log("Contains " + val)
      : console.log("Doesn't contain " + val);
  }
  find(val) {
    let index = 0;
    let current = this.head;

    while (current.next) {
      if (current.value == val) {
        console.log("The index of " + val + " is " + index);
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    console.log("Index of " + val + " is not found");
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += "( " + current.value + " ) => ";
      current = current.next;
      if (current == null) {
        str += " null";
      }
    }
    console.log("Full list: " + str);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(11);
linkedList.append(12);
linkedList.append(13);

linkedList.prepend(9);

console.log("Size of list: " + linkedList.size());
linkedList.returnHead();
linkedList.returnTail();

linkedList.at(2);
linkedList.at(4);

linkedList.pop();
linkedList.returnTail();

linkedList.contains(10);
linkedList.contains(100);

linkedList.find(11);
linkedList.find(40);

linkedList.toString();
