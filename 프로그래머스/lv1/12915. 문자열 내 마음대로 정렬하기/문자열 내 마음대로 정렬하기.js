function solution(strings, n) {
    //아이디어
    //정렬 sort() 메서드 안에 조건을 부여해서 풀어보는 방식
    // return strings.sort((a,b) => a[n] > b[n] ? 1 : -1);
    //왜지? 이렇게 푸니까 주르륵 틀렸다..
    //인덱스 1의 문자가 같은 문자열이 여럿 일 경우!!!!!!
    return strings.sort((a,b) => {
        if(a[n] != b[n]){
            return a[n] > b[n] ? 1 : -1
        }else{
            return a > b ? 1 : -1 
        }
    });
}