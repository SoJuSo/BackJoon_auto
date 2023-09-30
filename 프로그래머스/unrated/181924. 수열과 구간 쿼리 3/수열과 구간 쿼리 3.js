function solution(arr, queries) {
    //아이디어
    //복잡해보이지만
    //queries를 순회하며 주어진 조건대로 arr을 바꿔주다 리턴한다.
    // console.log(arr)
    queries.forEach((val, index) => {
        let temp = 0;
        temp = arr[val[0]];
        arr[val[0]] = arr[val[1]]
        arr[val[1]] = temp;
        // console.log(val[0], val[1])
        // console.log(arr)
    })
    return arr;
}