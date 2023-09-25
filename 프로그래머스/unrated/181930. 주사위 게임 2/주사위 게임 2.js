function solution(a, b, c) {
    //아이디어
    //조건에 따라 조건문을 생성하고 나눠주자
    let answer = 0;
    if(a == b && b == c && a == c){
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    }else if(a == b || b == c || a == c){
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    }else{
        answer = a + b + c
    }
    return answer;
}