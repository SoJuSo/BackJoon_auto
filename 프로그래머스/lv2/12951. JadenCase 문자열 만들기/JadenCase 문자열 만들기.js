function solution(s) {
    //아이디어
    //문자열 전체를 소문자로 만들 수 있을까? -> 된다
    //그러면 다 소문자로 바꿔주고 split해서 저장한 뒤에 일단 맨 앞 글자만 대문자로 바꿔주자
    //숫자일 경우엔? -> 어차피 3의 uppercase는 3일거아냐?
    //공백 문자가 연속해서 나올 수 있다? -> TC에서 걸릴거같은데.. -> 런타임에러 걸림 즉 공백도 구분해야함
    //split(' ') -> split('')으로 바꿔주고 공백이 발견되면 이전꺼 join해서 맨 앞에꺼 대문자로 만들기
    let answer = '';
    const arr = s.toLowerCase().split('');
    // console.log(arr)
    arr.forEach((val, index) => {
        if(arr[index - 1] == ' ' || index == 0){
            answer += val.toUpperCase();
        }else{
            answer += val.toLowerCase();
        }
    })
    return answer;
}