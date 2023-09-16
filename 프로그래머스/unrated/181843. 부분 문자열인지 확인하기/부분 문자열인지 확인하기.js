function solution(my_string, target) {
    //아이디어
    //부분 문자열인지 확인하려면 includes 메서드를 사용하면 된다.
    return my_string.includes(target) ? 1 : 0;
}