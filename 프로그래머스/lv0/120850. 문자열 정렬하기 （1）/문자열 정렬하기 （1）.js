function solution(my_string) {
    var answer = [];
    const arr = my_string.split('').map((i) => {!isNaN(i) ? answer.push(parseInt(i)) : 0})
    return answer.sort();
}