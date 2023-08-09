function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]){
            answer += absolutes[i];
        }else{
            answer += absolutes[i] * -1;
        }
    }
    // console.log(absolutes.length);
    return answer;
}