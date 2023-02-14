function solution(n) {
    var answer = [];
    let prime = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            prime.push(i);
            
            n /= i;
        }
    }
    
    if(n >= 2){
        prime.push(n);    
    }
    
    let ans = Array.from(new Set(prime));
    
    return ans.sort((a,b) => a - b);
}
    //실패
    // let newN = n;
    // let primeNumber = 2;
    // while(true){
    //     if(n === 1){
    //         break;
    //     }else{
    //         if(newN !== 1){
    //             if(n % primeNumber === 0){
    //                 answer.push(primeNumber);
    //                 n = n / primeNumber;
    //             }else{
    //                 primeNumber++;
    //             }
    //         }else{
    //             break;
    //         }
    //     }
    // }
    // answer = Array.from(new Set(answer));
    // return answer.sort();