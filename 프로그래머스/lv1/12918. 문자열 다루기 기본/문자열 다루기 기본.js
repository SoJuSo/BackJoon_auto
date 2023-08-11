function solution(s) {
    var answer = true;
    if(!(s.length == 4 || s.length == 6)){
        answer = false;
    }
    s.split('').map(i => {
        if(isNaN(i)){
            answer = false;
        }
    })
    return answer;
}