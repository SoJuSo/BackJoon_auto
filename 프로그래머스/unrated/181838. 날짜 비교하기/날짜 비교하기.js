function solution(date1, date2) {
    //아이디어
    //연도, 월, 일 순으로 비교해준다.
    //type은 숫자
    //이리저리 고민하다가 그냥 내장함수로 풀이
    return new Date(date1) < new Date(date2) ? 1 : 0;
}
