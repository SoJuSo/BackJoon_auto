function solution(str1, str2) {
    //아이디어
    //조건에 따라서 순서대로 answer에 추가해준다
    let answer = '';
    for(let i = 0; i < str1.length; i++){
        answer += str1[i];
        answer += str2[i];
    }
    return answer;
}