function solution(n) {
    var answer = 0;
    let input = n;
    let count = 0;
    String(n.toString(2)).split('').map(i => {if(i === '1'){count++;}})
    let cnt = 0;
    while(1){
        cnt = 0;
        input++;
        String(input.toString(2)).split('').map(i => {if(i === '1'){cnt++;}});
        if(cnt - count == 0){
            answer = input;
            break;
        }
    }
    return answer;
}