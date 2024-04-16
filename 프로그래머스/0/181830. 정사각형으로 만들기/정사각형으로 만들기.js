function solution(arr) {
    // console.log(arr.length, arr[0].length)
    if(arr.length === arr[0].length) return arr;
    
    if(arr.length !== arr[0].length){
        if(arr.length > arr[0].length){
            const diff = arr.length - arr[0].length;
            // console.log(diff)
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < diff; j++){
                    arr[i].push(0)                    
                }
            }
        }else{
            const diff = arr[0].length - arr.length;
            for(let i = 0; i < diff; i++){
                const tempArray = new Array(arr[0].length).fill(0)
                // console.log(tempArray)
                arr.push(tempArray)
            }
        }
    }
    
    return arr;
}