function solution(s) {
    var answer = [];
    const temp = s.split(' ')
    for(let i = 0; i < temp.length; i++){
        for(let j = 0; j < temp[i].length; j++){
            if(j % 2 === 0){
                answer.push(temp[i][j].toUpperCase());
            }else{
                answer.push(temp[i][j].toLowerCase());
            }
        }
        if(i < temp.length - 1){
            answer.push(' ');
        }
    }
    return answer.join('');
}