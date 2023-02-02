function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        let cnt = 0
        for(j = 0; j <= i; j++) {
            if(i % j === 0){
             cnt++;   
            }
        }
        
        if(cnt > 2) {
            answer += 1
        }
    }
    return answer;
}