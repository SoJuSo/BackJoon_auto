function solution(chicken) {
    let answer = 0;
    let coupon = 0;
    let temp = 0;
    answer += Math.floor(chicken / 10);
    coupon += (Math.floor(chicken / 10) + chicken % 10);
    while(1){
        if(coupon / 10 < 1 || coupon == 0){
            break;
        }
        answer += Math.floor(coupon / 10);
        temp = coupon % 10;
        coupon = Math.floor(coupon / 10) + temp;
    }
    return answer;
}