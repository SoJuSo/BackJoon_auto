function solution(my_string) {
    var answer = '';
    answer = my_string.toLowerCase().split('').sort().join('');
    return answer;
}