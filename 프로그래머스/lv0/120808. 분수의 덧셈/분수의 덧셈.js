function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let up = numer1 * denom2 + numer2 * denom1;
    let down = denom1 * denom2;
    let cnt = 0;

    for(let i = 1; i <= Math.max(up, down); i++){
        if(up % i === 0 && down % i === 0){
            cnt = i;
        }
    }
    // console.log(up, down, cnt)
    if(cnt !== 0){
        up /= cnt;
        down /= cnt;
    }
    answer.push(up);
    answer.push(down);
    return answer;
}