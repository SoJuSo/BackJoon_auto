function solution(a, b) {
    let answer = "";
    const newday = new Date(`${a} ${b}, 2016 15:00:00`)
    // console.log(newday.getDay())
    if(newday.getDay() == 0){
        answer = "SUN";
    }else if(newday.getDay() == 1){
        answer = "MON";
    }else if(newday.getDay() == 2){
        answer = "TUE";
    }else if(newday.getDay() == 3){
        answer = "WED";
    }else if(newday.getDay() == 4){
        answer = "THU";
    }else if(newday.getDay() == 5){
        answer = "FRI";
    }else if(newday.getDay() == 6){
        answer = "SAT";
    }
    return answer;
}