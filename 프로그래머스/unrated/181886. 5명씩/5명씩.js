function solution(names) {
    //아이디어
    //forEach를 사용해서 값과 인덱스를 확인해서 5로 나눠서 나머지가 0인 인덱스의 값을 answer에 push한다.
    let answer = [];
    names.forEach((val, index) => {
        if((index) % 5 == 0){
            answer.push(val)
        }
    })
    return answer;
}