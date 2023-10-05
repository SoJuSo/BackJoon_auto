function solution(myStr) {
    //아이디어
    //a,b,c를 replaceAll으로 공백으로 바꾸고 순회하며 공백을 제외하고 
    //answer에 단어형태로 push한다.
    //이때 answer이 비어있다면 EMPTY리턴
    let answer = [];
    myStr = myStr.replaceAll('a', ' ');
    myStr = myStr.replaceAll('b', ' ');
    myStr = myStr.replaceAll('c', ' ');
    let temp = '';
    for(let i = 0; i < myStr.length; i++){
        if(myStr[i] != ' '){
            temp += myStr[i];
        }
        if(temp != '' && myStr[i] == ' '){
            answer.push(temp);
            temp = ''
        }
    }
    if(temp != ''){
        answer.push(temp)
    }
    // console.log(myStr)
    return answer.length != 0 ? answer : ["EMPTY"];
}