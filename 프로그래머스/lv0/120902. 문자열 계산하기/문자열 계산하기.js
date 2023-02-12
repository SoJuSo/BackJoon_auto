function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('')
//  eval구문은 보안에 취약함, eval을 사용하지 않은 로직 필요
    answer = eval(my_string)
    // for(let i = 0; i < arr.length; i++){
    //     if(!isNaN(arr[i]) && arr[i] != ' '){
    //         console.log(arr[i])
    //         // answer += parseInt(arr[i])
    //     }
    // }
    return answer;
}