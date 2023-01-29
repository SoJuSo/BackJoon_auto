function solution(n) {
    var answer = 0;
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
        if(fact === n){
            answer = i;
            break;
        }
        if(fact > n){
            answer = i - 1;
            break;
        }
    }
    return answer;
}