function solution(num, total) {
    var answer = [];
    let m = (((total * 2) / num) + num - 1) / 2;
    let total_cnt = num;
    // console.log(m)
    while(1){
        if(total_cnt === 0){
            break;
        }
        answer.push(m - total_cnt + 1)
        total_cnt--;
    }
    
    return answer;
}