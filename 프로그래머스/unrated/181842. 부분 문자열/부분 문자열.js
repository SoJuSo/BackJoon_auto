function solution(str1, str2) {
    //아이디어
    //includes() 메서드 사용해서 삼항연산자로 값 리턴
    //문제 잘 읽자...str1이 str2의 부분문자열
    return str2.includes(str1) ? 1 : 0;
}