function solution(s){
    let p_count = 0;
    let y_count = 0;

    for(const a of s){
        console.log(a)
        if(a === 'p' || a === 'P') p_count++;
        if(a === 'y' || a === 'Y') y_count++;
    }
    
    return p_count === y_count;
}