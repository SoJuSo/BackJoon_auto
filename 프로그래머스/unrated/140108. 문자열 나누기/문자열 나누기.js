function solution(s) {
    //아이디어
    //스택을 사용해보자!
    //단shift, unshift를 잘 이용해서 해보자
    //아니다 막상 구현하다 보니 필요없을 것 같아서
    //문자를 저장하고 중복이 나오면 cnt ++ 아니라면 --를 해준다
    
    let answer = 0;
    const arr = s.split('');
    let cnt = 0;//문자열 중복 횟수 세기
    let temp = '';
    arr.forEach((val) => {
        if(cnt == 0){
            temp = val;
            cnt++;
            // console.log(temp)
        }else{
            if(val == temp){
                cnt++;
            }else{
                cnt--;
            }
        }
        
        if(cnt == 0){
            answer++;
        }
    })
    if(cnt != 0){
        answer++;
    }
    return answer;
}