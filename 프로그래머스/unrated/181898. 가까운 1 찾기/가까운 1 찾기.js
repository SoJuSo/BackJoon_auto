function solution(arr, idx) {
    //아이디어
    //idx부터 시작해서 arr순회하고
    //조건에 해당하면 answer에 값 부여, 아니면 answer = -1
    let answer = -1;
    for(let i = idx; i < arr.length; i++){
        if(arr[i] == 1){
            answer = i;
            break;
        }
    }
    return answer;
}