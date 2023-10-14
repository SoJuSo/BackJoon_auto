function solution(myString, pat) {
    // 아이디어
    // slice를 이용해서 주어진 조건까지 잘라준다.
    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}