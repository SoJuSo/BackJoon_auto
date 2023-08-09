function solution(arr, divisor) {
    var answer = [];
    arr.map((i) => 
            {if(i % divisor === 0){
                answer.push(i);
            }
    });
    answer.length != 0 ? 1 : answer.push(-1);
    return answer.sort(function(a,b){return a - b});
}