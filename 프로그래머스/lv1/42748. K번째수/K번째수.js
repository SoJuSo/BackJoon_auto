function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        const arr = [];
        for(let j = commands[i][0]; j <= commands[i][1]; j++){
            arr.push(array[j - 1]);
        }
        // console.log(arr.sort())
        answer.push(arr.sort((a,b) => a - b)[commands[i][2] - 1])
    }
    return answer;
}