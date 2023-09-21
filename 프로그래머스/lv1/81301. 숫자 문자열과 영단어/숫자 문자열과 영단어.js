function solution(s) {
    //아이디어
    //원래 ES6가 적용이 안돼서 좀 어려운 문제였는데
    //이제는 이렇게 간단하게 풀린다. 추후에 배열이나 객체로 다시 해봐야겠다.
    s = s.replaceAll("zero","0")
    s = s.replaceAll("one","1")
    s = s.replaceAll("two","2")
    s = s.replaceAll("three","3")
    s = s.replaceAll("four","4")
    s = s.replaceAll("five","5")
    s = s.replaceAll("six","6")
    s = s.replaceAll("seven","7")
    s = s.replaceAll("eight","8")
    s = s.replaceAll("nine","9")
    return Number(s);
}
