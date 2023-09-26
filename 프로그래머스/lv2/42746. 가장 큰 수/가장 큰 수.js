function solution(numbers) {
    //아이디어
    //정렬 안에 함수를 잘 쓰자
    let answer = '';
    answer = numbers.map((val) => String(val)).sort((a,b) => {
        // console.log(a+b, ' ' , b+a)
        return (b + a) - (a + b)
    }).join("")
    return answer[0] == '0' ? '0' : answer;//0000 같은 경우 예외처리
}