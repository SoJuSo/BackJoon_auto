function solution(arr) {
    var answer = 0;
    let lcm = 1;
    let cnt = 0
    while(1){
        cnt = 0;
        for(let i = 0; i < arr.length; i++){
            if(lcm % arr[i] === 0){
                cnt++;
            }
        }
        if(cnt === arr.length){
            break;
        }
        lcm++;
    }
    return lcm;
}