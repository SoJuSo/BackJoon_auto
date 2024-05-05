const fs = require("fs");
const path = require("path");

const createJSFile = (directory, fileName, content) => {
  const filePath = path.join(directory, `${fileName}.js`);

  // 파일이 이미 존재하는지 확인하고, 파일이 없는 경우에만 새 파일 생성
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`파일이 생성되었습니다. 파일 이름 : ${fileName}.js, 위치 : ${directory}`);
  } else {
    console.log(`${directory} 위치에 ${fileName}.js 파일이 이미 존재합니다.`);
  }
};

// 아래 문자열 구역에 백준 링크를 넣어주세요
// ex) https://www.acmicpc.net/problem/1152
// ====================================================
const 백준링크 = "https://www.acmicpc.net/problem/1152";
// ====================================================

const directory = "./"; // 파일을 생성할 디렉토리
const fileName = "B_" + 백준링크.split("/").pop(); // 새 파일의 이름, ex)B_1152.js 이렇게 생깁니다.
const content = `//${백준링크}\n
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\\n" : "\\r\\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);`; // 파일에 들어갈 내용

createJSFile(directory, fileName, content);
