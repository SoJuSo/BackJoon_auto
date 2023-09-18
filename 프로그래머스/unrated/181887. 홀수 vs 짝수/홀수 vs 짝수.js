function solution(num_list) {
    //아이디어
    //0번 인덱스를 1번이라 한다.
    //홀수번째 합 또는 짝수번째 합 중 큰 값을 리턴한다.
    let answer = [0, 0];//0번에 짝수 합, 1번에 홀수 합
    num_list.forEach((val, index) => {
        if((index + 1) % 2 == 0){
            answer[0] += val;
        }else{
            answer[1] += val;
        }
    })
    return answer[0] > answer[1] ? answer[0] : answer[1];
}