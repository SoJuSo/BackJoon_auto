function solution(d, budget) {
    var answer = 0;
    let cnt = 0;
    let dsort = d.sort((a,b) => a - b)
    for(let i = 0; i < dsort.length; i++){
        if(budget >= dsort[i]){
            budget = budget - dsort[i];
            cnt++;
            // console.log(budget)
        }else{
            break;
        }
    }
    // console.log(cnt)
    return cnt;
}