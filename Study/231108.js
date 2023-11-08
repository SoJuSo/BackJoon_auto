// 배열을 이용한 스택

/*
class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  // 가장 마지막 값을 출력하는 건가?
  peek() {
    return this.arr.length === 0 ? null : this.arr[this.arr.length - 1];
  }

  getSize() {
    return this.arr.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
console.log(stack);
*/

// 배열을 이용하지 않은 스택
/*
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) return -404;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    while (curr.next) {
      console.log(`${curr.data} --> `);
      curr = curr.next;
    }
    console.log(`${curr.data}`);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(6);
stack.push(7);
stack.push(11);
console.log(stack);

stack.display();
*/

// 단순 연결 리스트 `따라치기`
/*
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  append(newData) {
    let newNode = new Node(newData);
    let current = this.head;
    while (current.next !== null) {
      // 노의 끝까지 찾고
      current = current.next;
    }
    current.next = newNode; // 끝에서 지금 들어온 newNode를 추가해주는 그런건가?
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newData, item) {
    let newNode = new Node(newData);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item) {
    let preNode = this.findPrevious(item);
    preNode.next = preNode.next.next;
  }

  findPrevious(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.data !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  toString() {
    let array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.next.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let linkedList = new LinkedList();
linkedList.insert("A", "head");
linkedList.insert("B", "A");
linkedList.insert("C", "B");
linkedList.remove("B");
linkedList.append("D");
linkedList.append("E");

console.log(linkedList.toString());
*/
