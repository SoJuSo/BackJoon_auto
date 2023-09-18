function solution(arr) {
    //아이디어
    //조건에 따라서 forEach문을 순회하며
    //해당 인덱스의 값만큼 반복문 생성해서 answer에 push
    let answer = [];
    arr.forEach((val) => {
        for(let i = 0; i < val; i++){
            answer.push(val);
        }
    })
    return answer;
}