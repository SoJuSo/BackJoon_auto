function solution(arr) {
    // 러프하게
    let answer = [];
    let meet_2 = false
    let checker = false
    arr.map(value => {
        if(value === 2 && !meet_2){
            checker = !checker
            meet_2 = !meet_2
        }
        if(checker){
            answer.push(value)
        }
    })
    if(answer.length > 0){
        while(1){
            if(answer[answer.length - 1] === 2){
                break;
            }else{
                answer.pop()
            }
        }
    }
    return answer.length === 0 ? [-1] : answer;
}