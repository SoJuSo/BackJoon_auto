function solution(arr, queries) {
    //아이디어
    //주어진 조건에 맞춰서 구현
    queries.map(value => {
        const [s, e, k ] = value.map(Number)
        for(let i = s; i <= e; i++){
            i % k === 0 ? arr[i] += 1 : 0;
        }
    })
    return arr;
}