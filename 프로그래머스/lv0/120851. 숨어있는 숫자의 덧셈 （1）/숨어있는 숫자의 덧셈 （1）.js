function solution(my_string) {
    var answer = 0;
    //NaN
    my_string.split('').map((i) => {!isNaN(i) ? answer += parseInt(i) : 0})
    return answer;
}