function solution(left, right) {
    var answer = 0;
    let cnt = 0; //약수 cnt
    //일단 약수구하는 식부터
    for(let i = left; i <= right; i++){
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                // console.log(j);
                cnt++;
            }
        }
        if(cnt % 2 === 0){
            answer += i;
        }else{
            answer -= i;
        }
        // console.log(' ')
        cnt = 0;//초기화
    }
    return answer;
}