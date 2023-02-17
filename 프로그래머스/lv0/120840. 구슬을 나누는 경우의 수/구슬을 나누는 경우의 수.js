function solution(balls, share) {
    var answer = 0;
    //balls = 총 구슬 개수, share은 n개의 구슬 고르기
    const factorial = (number) => {
        let returnNumber = 1;
        for(let i = 1; i < number+1; i++){
            returnNumber *= i; 
        }
        return returnNumber;
    }
    answer = Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
    return answer;
}