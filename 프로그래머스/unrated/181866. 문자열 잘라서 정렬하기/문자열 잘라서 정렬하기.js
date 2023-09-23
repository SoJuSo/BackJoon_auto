function solution(myString) {
    //아이디어
    //x기준으로 구분
    //조건에 따라서 문장을 구성한 후 answer에 push
    let answer = [];
    let temp = '';
    for(let i = 0; i < myString.length; i++){
        if(myString[i] == 'x'){
            if(temp != ''){
                answer.push(temp);
            }
            temp = '';
        }else{
            temp += myString[i];
        }
        
        if(i == myString.length - 1 && temp.length != 0){
            answer.push(temp)
        }
    }
    return answer.sort();
}