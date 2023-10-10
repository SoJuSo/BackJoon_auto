function solution(q, r, code) {
    //아이디어 forEach로 index체크하면서 진행
    let answer = '';
    code.split('').forEach((val, index) => {
        (index % q === r) && (answer += val)
    })
    return answer;
}