function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('')
    let number = [0];
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            number.push(arr[i])
        }
        if(isNaN(arr[i]) || i == arr.length -1){
            answer += parseInt(number.join(''));
            number = [0];
        }
    }
    return answer;
}