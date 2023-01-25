function solution(order) {
    var answer = 0;
    String(order).split('').map((i) => {if(parseInt(i) != 0 && parseInt(i) % 3 === 0) answer++;});
    return answer;
}