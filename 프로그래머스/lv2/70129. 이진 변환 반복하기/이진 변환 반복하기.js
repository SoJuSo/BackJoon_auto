function solution(s) {
    let answer = [];
    let trans_cnt = 0;//이진변환 세는 변수
    let zero_cnt = 0;//0 세는 변수
    //아이디어
    //반복문을 통해서 1이 될때까지
    //replace 메서드 사용
    // s = s.replace(/0/g, '');
    while(s.length != 1){
        s.split('').map(i => {if(i == 0){zero_cnt++;}}).join('');//0의 갯수를 세고
        s = s.replace(/0/g, '');//0을 제거
        s = s.length.toString(2)//길이를 2진변환
        trans_cnt++;
    }
    // s = s.length.toString(2)
    // console.log(s)
    
    
    
    answer.push(trans_cnt, zero_cnt)
    return answer;
}
