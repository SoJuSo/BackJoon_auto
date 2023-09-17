function solution(my_string, alp) {
    //아이디어
    //replace메서드를 사용해서 alp인 경우 alp의 uppercase로 바꿔서 리턴
    return my_string.replaceAll(alp, alp.toUpperCase());
}