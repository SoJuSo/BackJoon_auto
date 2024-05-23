//https://www.acmicpc.net/problem/10699

const locale = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
const date = new Date(locale);

console.log(
  date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, 0) + "-" + date.getDate()
);
