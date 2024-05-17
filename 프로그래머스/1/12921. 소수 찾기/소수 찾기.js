function solution(n) {
    const prime = (num) => {
      const arr = [];
      for (let i = 0; i < num + 1; i++) {
        arr.push(true);
      }

      arr[0] = arr[1] = false;

      for (let i = 2; i * i <= num; i++) {
        if (arr[i]) {
          for (let j = i * i; j <= num; j += i) {
            arr[j] = false;
          }
        }
      }

      return arr;
    };
    
    return prime(n).filter((v) => v).length;
}