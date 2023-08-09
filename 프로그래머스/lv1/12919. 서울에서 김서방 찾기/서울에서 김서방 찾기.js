function solution(seoul) {
    var answer = '';
    const str = "김서방은 ";
    const str1 = "에 있다";
    let num = 0;
    for(let i = 1; i <= seoul.length; i++){
        if(seoul[i] === "Kim"){
            num = i;
            break;
        }
    }
    // console.log(str + String(num) + str1)
    // console.log(String(num));
    return str + String(num) + str1;
}