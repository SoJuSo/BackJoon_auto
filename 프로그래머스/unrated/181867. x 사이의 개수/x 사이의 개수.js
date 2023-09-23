function solution(myString) {
    //아이디어
    //순회하며 x가 아닌 문자가 나오면 cnt하고 x가 나오면 지금까지 나온 거 값 push하고 0으로 초기화
    //다시 카운트
    //마지막에 마지막 카운트 한거 또는 0 push
    let answer = [];
    let cnt = 0;
    myString.split('').forEach((val, index) => {
        if(val == 'x'){
            answer.push(cnt);
            cnt = 0;
        }else{
            cnt++;
        }
        if(index == myString.length - 1){
            answer.push(cnt)
        }
    })
    return answer;
}