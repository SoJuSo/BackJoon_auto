function solution(n) {
    let answer = 0;
    const arr = [];
    for(let i = 1; i < n + 1; i++){
        if(n % i === 0){
            arr.push(i);
        }
    }
    answer = arr.length;
    return answer;
}