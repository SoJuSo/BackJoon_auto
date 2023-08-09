function solution(s){
    var answer = true;
    let cnt_p = 0;
    let cnt_y = 0;
    s.split('').map((i) =>{
            if(i == 'p' || i == 'P'){
            cnt_p++;
        }else if(i == 'y' || i == 'Y'){
            cnt_y++;
        }
    })
    return cnt_p == cnt_y;
}