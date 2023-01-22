function solution(cipher, code) {
    var answer = [];
    cipher = cipher.split('');
    for(let i = 1; i < cipher.length + 1; i++){
        if(i % code === 0){
            answer.push(cipher[i - 1]);
        }
    }
    return answer.join('');
}