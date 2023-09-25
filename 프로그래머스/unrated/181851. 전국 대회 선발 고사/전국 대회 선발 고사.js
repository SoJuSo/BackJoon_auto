function solution(rank, attendance) {
    //아이디어
    //포문으로 가서 일단 true인 경우를 따로 저장하고 sort해서 처리
    let arr = []
    for(let i = 0; i < rank.length; i++){
        if(attendance[i]){
            arr.push([rank[i], i])
        }
    }
    arr.sort((a,b) => {
        return a[0] - b[0]
    })
    // console.log(arr)
    return arr[0][1] * 10000 + arr[1][1] * 100 + arr[2][1]
}