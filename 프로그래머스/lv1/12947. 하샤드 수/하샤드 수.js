function solution(x) {
    var answer = true;
    let sum = 0;
    // console.log(String(x).split('').map(Number).map(i => {sum += i}))
    // console.log(sum);
    String(x).split('').map(Number).map(i => {sum += i});
    return x % sum === 0 ? true : false;
}