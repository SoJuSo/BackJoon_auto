function solution(s) {
    const answer = []
    const arr = s.split(' ')
    arr.forEach((val) => {
        if(val === 'Z'){
            answer.pop()
        }else{
            answer.push(+val)
        }
    })
    return answer.length === 0 ? 0 : answer.reduce((acc,cur) => acc + +cur, 0);
}