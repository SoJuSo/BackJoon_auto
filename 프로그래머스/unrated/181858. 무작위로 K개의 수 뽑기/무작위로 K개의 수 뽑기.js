function solution(arr, k) {
    let answer = [];
    answer = arr.filter((e, i) => arr.indexOf(e) === i)
    answer = answer.slice(0, k)
    if(answer.length < k){
        while(answer.length < k){
            answer.push(-1)
        }
    }
    return answer;
}