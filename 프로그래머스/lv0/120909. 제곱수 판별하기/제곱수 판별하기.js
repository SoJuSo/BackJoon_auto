function solution(n) {
    var answer = 0;
    (Math.sqrt(n) % 1 === 0) ? answer = 1 : answer = 2;
    return answer;
}