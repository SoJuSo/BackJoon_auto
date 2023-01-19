function solution(money) {
    var answer = [];
    const cnt = parseInt(money / 5500);
    const ext = money % 5500;
    answer.push(cnt);
    answer.push(ext);
    return answer;
}