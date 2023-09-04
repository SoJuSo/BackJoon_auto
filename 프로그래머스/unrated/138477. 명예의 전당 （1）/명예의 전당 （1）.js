function solution(k, score) {
    let answer = [];
    let stack = [];
    let temp = [];
    for(let i = 0; i < score.length; i++){
        answer.push(score[i])
        if(answer.length === k + 1){
            answer.sort((a,b) => (b - a));
            answer.pop();
        }
        answer.sort((a,b) => (b - a));
        temp.push(answer[answer.length - 1])
        // console.log(answer)
        // console.log(answer[answer.length - 1])
    }
    return temp;
}