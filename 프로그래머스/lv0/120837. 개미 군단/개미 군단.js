function solution(hp) {
    var answer = 0;
    let big = 0;
    let mid = 0;
    let small = 0;
    if(hp > 5){
        big = parseInt(hp / 5);
        hp = hp - (big * 5);
    }
    if(hp >= 3){
        mid = parseInt(hp / 3);
        hp = hp - (mid * 3);
    }
    if(hp < 3 && hp != 0){
        small = parseInt(hp);
    }
    answer = big + mid + small;
    return answer;
}