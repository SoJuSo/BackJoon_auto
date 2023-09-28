function solution(arr, queries) {
    //아이디어
    //for문과 forEach를 조합해서 조건에 따라 arr을 바꿔준다. 틀림
    //2중 포문으로 조건에 맞추어 더해준다.
    for(let i = 0; i < queries.length; i++){
        for(let j = queries[i][0]; j <= queries[i][1]; j++){
            arr[j]++;
        }
    }
    // console.log(arr)
    return arr;
}