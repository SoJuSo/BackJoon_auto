function solution(array) {
    let answer = 0;
    if(array.length === 1){
        return array[0];
    }
    let obj = {};
    array.forEach((i) => {
        obj[i] = ++obj[i] || 1;
        // console.log(obj[i])
    })
    let arr = [];
    for(let key in obj){
        arr.push([key, obj[key]]);
    }
    arr.sort((a,b) => b[1] - a[1])
    if(arr.length > 1 && arr[0][1] === arr[1][1]){
        return -1;
    }
    // console.log(obj, arr)
    return answer = Number(arr[0][0]);
}