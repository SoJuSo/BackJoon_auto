function solution(numbers, n) {
    //아이디어
    //for문을 통해서 numbers의 값을 더하다가 n보다 커지면 break후 해당 값 리턴
    let answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i];
        if(answer > n){
            break;
        }
    }
    return answer;
}