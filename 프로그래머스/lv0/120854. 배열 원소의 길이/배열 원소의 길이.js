function solution(strlist) {
    let answer = [];
    // for(let i = 0; i < strlist.length; i++){
    //     answer.push(strlist[i].length);
    // }
    strlist.map(i => {
        answer.push(i.length);
    })
    return answer;
}