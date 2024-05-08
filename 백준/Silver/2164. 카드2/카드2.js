//https://www.acmicpc.net/problem/2164

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const N = Number(input.shift());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.last = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) return;
    const data = this.front.data;
    this.front = this.front.next;
    this.size--;
    return data;
  }
}

// console.log(N);
const queue = new Queue();
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}
// console.log(queue);

let status = "drop";

while (!queue.isEmpty()) {
  if (status === "drop") {
    queue.dequeue();
    status = "move";
  } else {
    const secondShift = queue.dequeue();
    queue.enqueue(secondShift);
    status = "drop";
  }
  // console.log(stack);
}

console.log(queue.last.data);
