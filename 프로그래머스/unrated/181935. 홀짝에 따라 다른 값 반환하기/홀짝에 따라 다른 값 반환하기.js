function solution(n) {
    //아이디어
    //n의 짝수 홀수를 판별하는 bool을 생성해서
    //짝수면 양의 짝수 제곱해서 더하고
    //홀수면 그냥 더하는 반복문 생성
    let answer = 0;
    let bool = false;//true 짝수, false 홀수
    n % 2 == 0 ? bool = true : 0;
    if(bool){
        for(let i = 2; i <= n; i += 2){
            answer += i ** 2;
        }
    }else{
        for(let i = 1; i <= n; i += 2){
            answer += i;
        }
    }
    return answer;
}