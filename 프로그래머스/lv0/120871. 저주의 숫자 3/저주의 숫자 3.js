function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        answer++;
        //왜 while인가? 문제 이해 필요
        while(answer.toString().includes('3') || answer % 3 === 0){
            answer++;
        }
    }
    return answer;
}