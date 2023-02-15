function solution(numbers, k) {
    // var answer = 0;
    // let num = 0;
    // for(let i = 0; i < k; i++){
    //     num += 2;
    //     if(num > numbers.length){
    //         num = num - numbers.length;
    //     }
    // }
    // answer = numbers[num - 2];
    // return answer;
    return numbers[(k - 1) * 2 % numbers.length];
}