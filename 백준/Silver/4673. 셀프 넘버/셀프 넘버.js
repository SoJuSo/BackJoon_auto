const sol = () => {
  const self = (num) => {
    return (
      String(num)
        .split("")
        .reduce((acc, cur) => acc + +cur, 0) + num
    );
  };

  const selfList = Array(10001).fill(true); // true로 초기화

  for (let i = 1; i <= 10000; i++) {
    const generated = self(i);
    if (generated <= 10000) {
      selfList[generated] = false; // 생성된 숫자는 false로 설정
    }
  }

  // 셀프넘버만 출력
  return selfList
    .slice(1) // 인덱스 0은 제외
    .reduce((acc, cur, idx) => {
      if (cur) {
        return [...acc, idx + 1]; // 인덱스에 1을 더해 원래 숫자로
      } else return acc;
    }, [])
    .join("\n");
};

console.log(sol());
