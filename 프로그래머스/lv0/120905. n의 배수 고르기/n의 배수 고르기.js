function solution(n, numlist) {
    var answer = [];
    numlist.map((i) => {i % n === 0 ? answer.push(i) : 0})
    return answer;
}