function solution(ineq, eq, n, m) {
    let answer = 0;
    switch(ineq){
        case '<':
            if(eq === "="){
                if(n <= m){
                    answer = 1
                }
            }else{
                if(n < m){
                    answer = 1
                }
            }
            break;
        case '>':
            if(eq === "="){
                if(n >= m){
                    answer = 1
                }
            }else{
                if(n > m){
                    answer = 1
                }
            }
            break;
    }
    return answer;
}