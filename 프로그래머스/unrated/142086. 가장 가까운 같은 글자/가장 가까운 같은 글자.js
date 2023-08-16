function solution(s) {
    let answer = [];
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        let num = -1;
        let temp = [];
        for(let j = 0; j <= i; j++){
            temp.push(arr[j])
        }
        // console.log(temp.lastIndexOf(arr[i]))
        temp.pop()
        // console.log(temp.lastIndexOf(arr[i]))
        if(temp.lastIndexOf(arr[i]) !== - 1){
            answer.push(i - temp.lastIndexOf(arr[i]))
        }else{
            answer.push(temp.lastIndexOf(arr[i]))
        }
        // console.log(temp)
        temp = [];
        // console.log()
    }
    return answer;
}