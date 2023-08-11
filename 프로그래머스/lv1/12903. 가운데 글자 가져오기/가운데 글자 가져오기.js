function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
        answer = s[s.length / 2 - 1] + s[s.length / 2]
    }else{
        answer = s[Math.floor(s.length / 2)]
    }
    //실패 ex)6은 짝수로만 봐야함
    // console.log(answer)
    return answer;
}