function solution(my_string, num1, num2) {
    var answer = '';
    const arr = my_string.split('');
    const char = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = char;
    answer = arr.join('')
    return answer;
}