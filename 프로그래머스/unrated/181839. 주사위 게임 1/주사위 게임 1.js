function solution(a, b) {
    //아이디어
    //갑자기 궁금증이 생겼다. if연산은 얼마나 많은 부하를 차지할까?
    //문제 조건대로 else if 조건문 작성해서 answer에 리턴
    let answer = 0;
    if(a % 2 != 0 && b % 2 != 0){
        answer = a ** 2 + b ** 2;
    }else if(a % 2 != 0 || b % 2 != 0){
        answer = 2 * (a + b);
    }else if(a % 2 == 0 && b % 2 == 0){
        answer = Math.abs(a - b);
    }
    return answer;
}