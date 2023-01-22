function solution(n) {
    var answer = 0;
    String(n).split('').map((i) => {answer += parseInt(i)})
    return answer;
}