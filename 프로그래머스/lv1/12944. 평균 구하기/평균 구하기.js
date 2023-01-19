function solution(arr) {
    var answer = 0;
    arr.map((i) => {answer += i});
    answer = answer / arr.length;
    return answer;
}