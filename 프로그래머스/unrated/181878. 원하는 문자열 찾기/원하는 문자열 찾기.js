function solution(myString, pat) {
    //아이디어
    //myString, pat 모두 toLowerCase()메서드로 변화시키고 includes() 메서드 사용해서 포함하는 지 확인
    //문제 조건을 통해 대소문자 상관없다 했으니 간단하게 바꿔서 해결
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}