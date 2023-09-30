function solution(arr, flag) {
    //아이디어
    //구현 문제이다
    //조건에 따라 배열을 다뤄준다.
    let answer = [];
    arr.forEach((val, index) => {
        if(flag[index]){
            for(let i = 0; i < arr[index]; i++){
                answer.push(val);
                answer.push(val);
            }
        }else{
            for(let i = 0; i < arr[index]; i++){
                answer.pop();
            }
        }
    })
    return answer;
}