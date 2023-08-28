function solution(code) {
    let answer = [];
    //아이디어
    //split 해서 하나씩 forEach로 순회하며 체크
    //default mode = 0
    let mode = 0;
    const temp = code.split('');
    temp.forEach((num, index) => {
        // console.log(num, index)
        if(mode === 0 && isNaN(num) && index % 2 === 0){
            answer.push(num)
        }else if(mode === 1 && isNaN(num) && index % 2 === 1){
            answer.push(num)
        }else if(!isNaN(num)){
            if(mode === 0){
                mode = 1;
            }else{
                mode = 0;
            }
        }
    })
    if(answer.length === 0){
        return "EMPTY"
    }
    return answer.join('');
}