function solution(before, after) {
    var answer = 0;
    before.split('').sort().join('') === after.split('').sort().join('') ? answer = 1 : answer = 0
    return answer;
}