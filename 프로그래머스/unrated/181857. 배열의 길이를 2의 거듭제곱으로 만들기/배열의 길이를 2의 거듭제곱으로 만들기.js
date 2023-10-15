function solution(arr) {
    // 아이디어
    // ?? 뭔 이런문제가...
    // for문 돌면서 조건에 따라 진행한다.
    // 2의 거듭제곱을 확인하며 갯수가 부족하거나 충분한지 판별하고 그만큼 0을 추가해준다.
    for(let i = 0; i < arr.length; i++){
        if(2 ** i >= arr.length){
            for(let j = arr.length; j < 2 ** i; j++){
                arr.push(0)
            }
            break;
        }
    }
    return arr;
}