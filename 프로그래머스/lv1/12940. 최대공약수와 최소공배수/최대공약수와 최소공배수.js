function solution(n, m) {
    var answer = [];
    //최대공약수 gcd
    let gcd = 1;
    for(let i = 2; i <= Math.min(n, m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    // console.log(n * m / gcd)
    //최소공배수 lcm
    // let lcm = 1;
    // while(1){
    //     if(lcm % n === 0 && lcm % m ===0){
    //         break;
    //     }
    //     lcm++;
    // }
    answer.push(gcd, n * m / gcd)
    return answer;
}