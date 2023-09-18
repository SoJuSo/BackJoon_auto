function solution(arr) {
    //아이디어
    //배열 순회하면서 조건에 따라 바꿔주고 answer에 push
    let answer = [];
    arr.forEach((val, index) => {
        if(val >= 50 && val % 2 == 0){
            answer.push(val / 2);
        }else if(val < 50 && val % 2 != 0){
            answer.push(val * 2);
        }else{
            answer.push(val);
        }
    })
    return answer;
}