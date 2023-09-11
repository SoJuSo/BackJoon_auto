function solution(my_string, n) {
    let answer = [];
    const arr = my_string.split('');
    for(let i = 0; i < n; i++){
        answer.push(arr[i]);
    }
    return answer.join('')
}