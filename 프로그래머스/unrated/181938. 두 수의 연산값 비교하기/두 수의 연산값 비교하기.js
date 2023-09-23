function solution(a, b) {
    //아이디어
    //조건에 따라 식 구현한 후 삼항연산자로 리턴
    return Number(String(a) + String(b)) >= 2 * (a * b) ? Number(String(a) + String(b)) : 2 * (a * b);
}