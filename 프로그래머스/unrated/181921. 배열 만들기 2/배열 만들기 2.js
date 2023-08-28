function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++){
        let cnt = 0;
        const temp = String(i).split('');
        temp.forEach(num => {
            if(num != 5){
                if(num != 0){
                    cnt++;
                }
            }
        })
        if(cnt === 0){
            answer.push(i)
        }
    }
    
    if(answer.length === 0){
        answer.push(-1)
    }
    return answer;
}