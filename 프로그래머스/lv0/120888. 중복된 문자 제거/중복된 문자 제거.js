function solution(my_string) {
    var answer = '';
    let arr = [...my_string]
    const set = new Set(arr);
    answer = [...set].join('')
    return answer;
}