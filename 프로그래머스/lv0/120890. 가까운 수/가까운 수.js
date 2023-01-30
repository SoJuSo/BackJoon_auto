function solution(array, n) {
    var answer = 0;
    let compare = 100;
    array = array.sort()
    for(let i = 0; i < array.length; i++){
        if(Math.abs(array[i] - n) < compare){
            answer = array[i];
            compare = Math.abs(array[i] - n);
        }
    }
    return answer;
}