function solution(numLog) {
    //아이디어
    //순회하면서 이전 꺼랑 차이 비교해서 wsda중 무엇인지 파악하고
    //answer에 합쳐주기
    let answer = '';
    for(let i = 1; i < numLog.length; i+=1){
        const temp = numLog[i] - numLog[i - 1];
        switch(temp){
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                break;
        }
    }
    return answer;
}