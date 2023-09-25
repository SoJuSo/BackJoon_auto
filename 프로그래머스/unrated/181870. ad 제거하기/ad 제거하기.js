function solution(strArr) {
    //아이디어
    //includes사용해서 ad가 없으면 answer에 push
    let answer = [];
    strArr.forEach((val) => {
        if(!val.includes('ad')){
            answer.push(val)
        }
    })
    return answer;
}