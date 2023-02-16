function solution(numbers) {
    var answer = 0;
    //다시 풀어보기
    const numList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i < numList.length; i++){
        numbers = (numbers.split(numList[i]).join(i))
    }
    return Number(numbers);
}