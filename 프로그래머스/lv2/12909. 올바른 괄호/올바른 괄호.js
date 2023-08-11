function solution(s){
    var answer = true;
    let stack = 0;

    s.split('').map(i => {
        if(i === '('){
            stack += 1;
        }else if(i === ')'){
            stack -= 1;
        }
        if(stack < 0){
            answer = false;
        }
    })
    
    if(stack !== 0){
        answer = false;
    }
    return answer;
}