function solution(a, b, flag) {
    //아이디어
    //flag에 따라서 리턴하는 값이 다르다 -> 삼항연산자 사용
    return flag ? a + b : a - b;
}