function solution(n) {
    //아이디어
    //2차원 배열에 push해야하는 케이스
    //for문이랑 fill..? 아직 잘 모르니 2중포문을 사용하자
    let answer = [];
    let temp = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i == j){
                temp.push(1)
            }else{
                temp.push(0)
            }
        }
        answer.push(temp)
        temp = []
    }
    return answer;
}