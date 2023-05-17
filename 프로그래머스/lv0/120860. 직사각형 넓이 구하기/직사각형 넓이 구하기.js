function solution(dots) {
    var answer = 0;
    let max_width = 0;
    let max_height = 0;
    let k = 0;
    for(let i = 0; i < 4; i++){
        for(k = 0; k < 4; k++){
            if(max_width > (dots[i][0] - dots[k][0])){
                max_width = dots[i][0] - dots[k][0];
            }
        }
    }
    for(let l = 0; l < 4; l++){
        for(k = 0; k < 4; k++){
            if(max_height > (dots[l][1] - dots[k][1])){
                max_height = dots[l][1] - dots[k][1];
            }
        }
    }
    return answer = max_width * max_height;
}