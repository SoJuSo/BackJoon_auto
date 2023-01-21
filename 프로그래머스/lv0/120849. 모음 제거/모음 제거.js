function solution(my_string) {
    var answer = '';
    const aeiou = 'aeiou';
    answer = my_string.split('').filter((i) => (!aeiou.includes(i))).join('');
    return answer;
}