function solution(array) {
    var answer = [];
    let max = 0;
    let cnt = 0;
    for(let i = 0; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
            cnt = i;
        }
    }
    answer.push(max);
    answer.push(cnt);
    return answer;
}