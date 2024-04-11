function solution(n){
    let answer = 0;

    for(const val of String(n)){
        answer += Number(val)
    }
    
    return answer;
}