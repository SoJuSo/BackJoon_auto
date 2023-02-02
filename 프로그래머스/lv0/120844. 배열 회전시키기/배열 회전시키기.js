function solution(numbers, direction) {
    var answer = [];
     if (direction === "right") {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    answer = numbers;
    return answer;
}