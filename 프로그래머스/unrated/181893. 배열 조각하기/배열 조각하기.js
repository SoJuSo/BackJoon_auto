function solution(arr, query){
    let answer = [];
    let temp = arr;
    for(let i = 0; i < query.length; i++){
        const num = query[i];
        if(i % 2 === 0){
            temp = temp.slice(0, num + 1)
        }else{
            temp = temp.slice(num)
        }
    }
    answer = temp;
    return answer;
}