function solution(n, arr1, arr2) {
    var answer = [];
    let temp = [];
    for(let i = 0; i < n; i++){
        // console.log(arr1[i].toString(2).padStart(n, '0').split(''))
        for(let j = 0; j < n; j++){
            if(parseInt(arr1[i].toString(2).padStart(n, '0').split('')[j]) || 
                parseInt(arr2[i].toString(2).padStart(n, '0').split('')[j]) == 1){
                // console.log(j)
                temp.push('#')
            }else{
                temp.push(' ')
            }
            // console.log(parseInt(arr1[i].toString(2).padStart(n, '0').split('')[j]) || 
            //             parseInt(arr2[i].toString(2).padStart(n, '0').split('')[j]))
        }
        answer.push(temp.join(''))
        // console.log(temp.join(''))
        temp = [];
    }
    // console.log()
    // for(i = 0; i < n; i++){
    //     console.log(arr2[i].toString(2).padStart(n, '0').split(''))
    // }
    return answer;
}