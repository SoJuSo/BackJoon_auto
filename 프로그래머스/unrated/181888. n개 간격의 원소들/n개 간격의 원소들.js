function solution(num_list, n) {
    //아이디어
    //배열 인덱스로 n을 나눴을 때 나머지가 0인 경우에 answer에 push
    let answer = [];
    for(let i = 0; i < num_list.length; i++){
        if(i % n === 0){
            answer.push(num_list[i])
        }
    }
    return answer;
}