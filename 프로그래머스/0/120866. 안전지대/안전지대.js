function solution(board) {
    const N = board[0].length
    // let answer = Array.from({length: N}).fill(Array.from({length : N}).fill(false));
    let answer = Array.from({length: N}, () => Array.from({length: N}).fill(false));
    // console.log(answer)
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(board[i][j] === 1){
                // console.log(i,j)
                for(let a = i - 1; a <= i + 1; a++){
                    // console.log(a)
                    for(let b = j - 1; b <= j + 1; b++){
                        // console.log('b',b)
                        if(a >= 0 && b >= 0 && a < N && b < N){
                            // console.log(a,b)
                            answer[a][b] = true;
                        }
                    }
                    // console.log(answer)
                }
            } 
        }
    }
    
    let count = 0;
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(!answer[i][j]){
                count++;
            }
        }
    }
    
    // console.log(answer)
    return count;
}