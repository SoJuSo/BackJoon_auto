function solution(s1, s2) {
    var answer = 0;
    answer = s1.filter(s => s2.includes(s)).length;
    return answer;
}