function solution(price, money, count) {
    var answer = 0;
    let temp = 0;
    for(let i = 1; i <= count; i++){
        temp += price * i;
    }
    answer = temp - money < 0 ? 0 : Math.abs(temp - money)
    return answer;
}