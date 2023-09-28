function solution(board, k) {
    //아이디어
    //주어진 조건에 따라 for문을 만들어서
    //해결해준다.
    let answer = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i + j <= k){
                answer += board[i][j];
            }
        }
    }
    return answer;
}