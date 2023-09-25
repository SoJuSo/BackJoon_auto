function solution(my_string) {
    //아이디어
    //맨 뒤에서부터 slice해서 answer에 저장한 후 정렬
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
        answer.push(my_string.slice(i, my_string.length))
    }
    return answer.sort();
}