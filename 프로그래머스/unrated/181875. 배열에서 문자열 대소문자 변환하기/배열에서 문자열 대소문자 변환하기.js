function solution(strArr) {
    //아이디어
    //홀수번째 => toUpperCase() 메서드 사용
    //짝수번째 => toLowerCase() 메서드 사용
    let answer = [];
    strArr.forEach((val, index) => {
        if(index % 2 == 0){
            answer.push(val.toLowerCase())
        }else{
            answer.push(val.toUpperCase())
        }
    })
    return answer;
}