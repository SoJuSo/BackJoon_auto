function solution(n) {
    // 아이디어
    // 홀수인 약수의 개수와 같다는 조건을 이용하면 된다.
    let answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0 && i % 2 === 1){
            answer++;
        }
    }
    return answer;
}