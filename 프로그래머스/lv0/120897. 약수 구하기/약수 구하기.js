function solution(n) {
    var answer = [];
    for(let i = 1; i < n + 1; i++){
        if(n % i === 0){
            answer.push(i);
        }
    }
    return answer.sort((a,b) => {b - a});
}