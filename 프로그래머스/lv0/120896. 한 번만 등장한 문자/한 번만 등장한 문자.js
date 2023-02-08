function solution(s) {
    var answer = [];
    let arr = s.split('')
    arr.forEach((i) => {
        if(s.indexOf(i) === s.lastIndexOf(i)){
            answer.push(i);
        }
    })
    return answer.sort().join('');
}