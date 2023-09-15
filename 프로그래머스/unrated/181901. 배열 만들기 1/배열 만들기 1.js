function solution(n, k) {
    //아이디어
    //반복문으로 1부터 n까지 돌리며
    //k로 나눴을 때 나머지가 0이면 answer에 push
    let answer = [];
    for(let i = 1; i <= n; i++){
        if(i % k === 0){
            answer.push(i)
        }
    }
    return answer;
}