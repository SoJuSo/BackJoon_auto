//https://www.acmicpc.net/problem/10845

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const dequeueData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return dequeueData;
  }

  queueSize() {
    return this.size;
  }
}

const queue = new Queue();
const answer = [];
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  const cur = input.shift().split(" ");
  switch (cur[0]) {
    case "push":
      queue.enqueue(cur[1]);
      break;
    case "pop":
      answer.push(queue.isEmpty() ? -1 : queue.dequeue());
      break;
    case "size":
      answer.push(queue.queueSize());
      break;
    case "empty":
      answer.push(queue.isEmpty() ? 1 : 0);
      break;
    case "front":
      answer.push(queue.isEmpty() ? -1 : queue.head.data);
      break;
    case "back":
      answer.push(queue.isEmpty() ? -1 : queue.tail.data);
      break;
  }
}
console.log(answer.join("\n"));
