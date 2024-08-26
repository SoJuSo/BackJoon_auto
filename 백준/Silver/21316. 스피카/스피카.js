// https://www.acmicpc.net/problem/21316

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const graph = Array.from({ length: 13 }, () => []);

  for (const node of arr) {
    const [x, y] = node.split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  for (let i = 1; i <= 12; i++) {
    if (graph[i].length === 3) {
      const temp = [];
      graph[i].forEach((val) => {
        if (!temp.includes(graph[val].length)) {
          temp.push(graph[val].length);
        }
      });
      if (temp.length === 3) return i;
    }
  }
};

console.log(sol(input));
