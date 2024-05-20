const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const vscExecutor = (execFilePath, execFileName) => {
  exec(`code ${execFilePath}`, (error, _, stderr) => {
    if (error) {
      console.error(`Visual Studio Code를 열던 중 오류가 발생했습니다: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`${execFileName}.js 파일이 Visual Studio Code에서 열렸습니다.`);
  });
};

const createJSFile = (directory, fileName, content) => {
  const filePath = path.join(directory, `${fileName}.js`);

  // 파일이 이미 존재하는지 확인하고, 파일이 없는 경우에만 새 파일 생성
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`파일이 생성되었습니다. 파일 이름 : ${fileName}.js, 위치 : ${directory}`);

    // 파일이 생성된 후에 Visual Studio Code에서 해당 파일을 연다.
    vscExecutor(filePath, fileName);
  } else {
    console.log(`${directory} 위치에 ${fileName}.js 파일이 이미 존재합니다.`);
    // 존재하는 파일도 열어준다.
    vscExecutor(filePath, fileName);
  }
};

// 아래 문자열 구역에 백준 링크를 입력한다.
// 아마 주로 뒷 숫자만 바꾸면서 사용하면 될 것 같다.
// ex) https://www.acmicpc.net/problem/1152
// ====================================================
const 백준링크 = "https://www.acmicpc.net/problem/10809";
// ====================================================

const directory = "./"; // 파일을 생성할 디렉토리
const fileName = "B_" + 백준링크.split("/").pop(); // 새 파일의 이름, ex)B_1152.js 이렇게 생긴다.
const content = `//${백준링크}\n
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\\n" : "\\r\\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);`; // 파일에 들어갈 내용

createJSFile(directory, fileName, content);
