function solution(num_list, n) {
    //간단하게 for문 조건에 n을 대입해서
    //answer에 push
    let answer = [];
    for(let i = 0; i < n; i++){
        answer.push(num_list[i])
    }
    return answer;
}