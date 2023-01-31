function solution(array) {
    var answer = 0;
    array.map((i) => {
        String(i).split('').map(((j) => {(parseInt(j) === 7) ? answer += 1 : 0}))
    })
    return answer;
}