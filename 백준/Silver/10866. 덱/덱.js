//https://www.acmicpc.net/problem/10866

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());

class Node {
  constructor(data) {
    this.data = data;
    this.front = null;
    this.back = null;
  }
}

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  enqueueFront(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.front = newNode;
      newNode.back = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  enqueueBack(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.back = newNode;
      newNode.front = this.last;
      this.last = newNode;
    }
    this.size++;
  }

  dequeueFront() {
    if (this.isEmpty()) {
      return -1;
    } else {
      const temp = this.first;
      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.back;
        this.first.front = null;
      }
      this.size--;
      return temp.data;
    }
  }

  dequeueBack() {
    if (this.isEmpty()) {
      return -1;
    } else {
      const temp = this.last;
      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.last = this.last.front;
        this.last.back = null;
      }
      this.size--;
      return temp.data;
    }
  }

  dequeSize() {
    return this.size;
  }

  frontNode() {
    if (this.isEmpty()) return -1;
    return this.first.data;
  }

  backNode() {
    if (this.isEmpty()) return -1;
    return this.last.data;
  }
}

const deque = new Deque();
const answer = [];

for (let i = 0; i < N; i++) {
  const [text, num] = input[i].split(" ");
  switch (text) {
    case "push_front":
      deque.enqueueFront(Number(num));
      break;
    case "push_back":
      deque.enqueueBack(Number(num));
      break;
    case "pop_front":
      answer.push(deque.dequeueFront());
      break;
    case "pop_back":
      answer.push(deque.dequeueBack());
      break;
    case "size":
      answer.push(deque.dequeSize());
      break;
    case "empty":
      answer.push(deque.isEmpty());
      break;
    case "front":
      answer.push(deque.frontNode());
      break;
    case "back":
      answer.push(deque.backNode());
      break;
  }
}

console.log(answer.join("\n"));
