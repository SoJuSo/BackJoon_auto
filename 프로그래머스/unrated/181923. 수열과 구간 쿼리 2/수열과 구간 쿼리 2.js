function solution(arr, queries) {
    let answer = [];
    for(const value of queries){
        // console.log(value)
        const [s,e,k] = value;
        // console.log(s,e,k)
        // console.log(typeof s)
        let temp = []
        for(let i = s; i <= e; i++){
            if(arr[i] > k){
                temp.push(arr[i])
            }
        }
        temp.length !== 0 ? answer.push(temp.sort((a,b) => a-b)[0]) : answer.push(-1)
    }
    return answer;
}