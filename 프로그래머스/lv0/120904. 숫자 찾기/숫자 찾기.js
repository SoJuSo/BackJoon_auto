function solution(num, k) {
    var answer = -1;
    const arr = String(num).split('')
    for(let i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) === k){
            answer = i + 1;
            break;
        }
    }
    return answer;
}