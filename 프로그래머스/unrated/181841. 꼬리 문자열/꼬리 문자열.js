function solution(str_list, ex) {
    //아이디어
    //includes() 메서드를 사용해서 ex단어를 포함한 배열은 제외하고 answer에 추가하기
    let answer = '';
    str_list.forEach((val) => {
        if(!val.includes(ex)){
            answer += val;
        }
    })
    return answer;
}