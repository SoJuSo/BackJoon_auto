function solution(quiz) {
    var answer = [];
    for(let i = 0; i < quiz.length; i++){
        let left = 0, right = 0;
        const temp = quiz[i].split(' ');
        // console.log(temp)
        for(let l = 0; l < temp.length; l++){
            if(temp[l] === '+'){
                left = Number(temp[l - 1]) + Number(temp[l + 1]);
            }else if(temp[l] === '-'){
                left = Number(temp[l - 1]) - Number(temp[l + 1]);
            }else if(temp[l] === '='){
                right = Number(temp[l + 1]);
            }
        }
        if(left === right){
            answer.push("O")
        }else{
            answer.push("X")
        }
    }
    return answer;
}