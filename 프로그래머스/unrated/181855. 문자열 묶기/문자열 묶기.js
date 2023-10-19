function solution(strArr) {
    let answer = 0;
    const obj = {}
    strArr.map((val) => {
        if(obj[val.length] === undefined){
            obj[val.length] = 1;
        }else{
            obj[val.length]++
        }
    })
    Object.values(obj).map(val => val > answer ? answer = val : 0)
    return answer;
}