// https://www.acmicpc.net/problem/18258

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, arr) => {
  // 아이디어
  // 대놓고 큐2
  // 큐 구현
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

  for (let i = 0; i < pcs; i++) {
    const cur = arr[i];

    if (cur.includes("push")) {
      queue.enqueue(cur.split(" ")[1]);
    } else {
      switch (cur) {
        case "front":
          queue.queueSize() ? answer.push(queue.head.data) : answer.push(-1);
          break;
        case "back":
          queue.queueSize() ? answer.push(queue.tail.data) : answer.push(-1);
          break;
        case "size":
          answer.push(queue.queueSize());
          break;
        case "empty":
          queue.queueSize() ? answer.push(0) : answer.push(1);
          break;
        case "pop":
          queue.queueSize() ? answer.push(queue.dequeue()) : answer.push(-1);
          break;
        default:
          break;
      }
    }
  }

  return answer.join("\n");
};

console.log(sol(N, input));
