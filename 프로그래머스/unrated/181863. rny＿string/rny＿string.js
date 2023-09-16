function solution(rny_string) {
    //아이디어
    //내장함수를 몰랐다면 나눠서 m -> rn으로 추가했을 것 같지만
    //replaceAll() 메서드로 'm' -> 'rn' 으로 바꿔준다
    return rny_string.replaceAll('m', 'rn');
}