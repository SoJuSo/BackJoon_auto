function solution(a, b, n) {
    var answer = 0;
    
    while(true){
        if(n < a){
            break;
        }
        answer += parseInt(n / a) * b;
        n = (n % a) + (parseInt(n / a) * b);
    }
    
    return answer;

}