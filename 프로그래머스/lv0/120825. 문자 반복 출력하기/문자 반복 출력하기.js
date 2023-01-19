function solution(my_string, n) {
    var answer = [];
    my_string.split('').map((letter) => {
        for(let i = 0; i<n; i++){
            answer.push(letter);
        }
    })
    answer = answer.join('');
    return answer;
}