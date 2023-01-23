function solution(my_string) {
    var answer = '';
    let arr = [];
    my_string.split('').map(
        (i) => {i.charCodeAt() >= 65 && i.charCodeAt() <= 96 ?  arr.push(i.toLowerCase()) :  arr.push(i.toUpperCase())}
    )
    answer = arr.join('')
    return answer;
}