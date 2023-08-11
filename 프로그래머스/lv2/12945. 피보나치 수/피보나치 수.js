function solution(n) {
    var answer = 0;
    let fib0 = 0;
    let fib1 = 1;
    
    let fib = 0;
    
    for(let i = 2; i <= n; i++){
        fib = fib0 + fib1;
        answer = fib % 1234567;
        fib0 = fib1;
        fib1 = answer;
    }
    
    return answer;
}