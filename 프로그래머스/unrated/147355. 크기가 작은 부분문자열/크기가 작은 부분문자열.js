function solution(t, p) {
    var answer = 0;
    const t_arr = String(t).split('');
    // console.log(String(t).split(''));
    let temp = [];
    for(let i = 0; i <= t.length - p.length; i++){
        temp = [];
        for(let j = 0; j < p.length; j++){
            // console.log(t_arr[i + j])
            temp.push(t_arr[i + j]);
        }
        // console.log(Number(temp.join('')))
        if(Number(temp.join('')) <= p){
            answer += 1;
        }
    }
    return answer;
}