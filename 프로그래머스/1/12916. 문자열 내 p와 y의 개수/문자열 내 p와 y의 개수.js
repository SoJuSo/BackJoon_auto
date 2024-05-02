function solution(s){
    let answer = true;
    let x = 0, y = 0;
    s.split('').forEach((val) => {
        val.toUpperCase() === 'P' && x++;
        val.toUpperCase() === 'Y' && y++;
    })
    
    return x === y;
}