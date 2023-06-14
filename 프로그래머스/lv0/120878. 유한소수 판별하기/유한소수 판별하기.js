function solution(a, b) {
    var answer = 0;
    let gcd = 0;//최대공약수
    for(let i = 1; i < Math.min(a,b) + 1; i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    b = b / gcd;
    
    while(b%2 === 0){
        b = b/2
    }
    while(b%5 === 0){
        b = b/5
    }

    return b === 1 ? 1 : 2;
}