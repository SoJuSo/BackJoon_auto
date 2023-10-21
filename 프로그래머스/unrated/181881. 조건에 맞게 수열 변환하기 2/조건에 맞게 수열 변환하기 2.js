function solution(arr) {
    let count = 0;
    let beforeArr = arr
    let afterArr = []
    while(1){
        // console.log("??")
        afterArr = beforeArr.map(value => {
            if(value >= 50 && value % 2 === 0){
                return (value / 2);
            }else if(value < 50 && value % 2 === 1){
                return ((value * 2) + 1)
            }else{
                return value
            }
        })
        // console.log(afterArr, beforeArr)
        // console.log(beforeArr.toString() == afterArr.toString())
        if(beforeArr.toString() == afterArr.toString()){
            break;
        }else{
            // console.log('???')
            count++;
            beforeArr = afterArr
        }
    }
    console.log(count)
    // console.log(newArr)
    return count;
}