function solution(my_str, n) {
    var answer = [];
    let string_my_str = my_str.split('');
    let arr = [];
    for(let i = 0; i < string_my_str.length; i++){
        arr.push(string_my_str[i]);
        if((i + 1) % n === 0){
            answer.push(arr.join(''))
            arr = [];
        }else if(i === string_my_str.length - 1 && arr){
            answer.push(arr.join(''))
        }
    }
    return answer;
}