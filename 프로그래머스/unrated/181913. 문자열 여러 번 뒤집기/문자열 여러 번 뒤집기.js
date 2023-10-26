function solution(my_string, queries) {
    queries.map((value) => {
        const [start, end] = value;
        const arr = my_string.split('')
        const change = my_string.slice(start,end + 1).split("").reverse()
        for(let i = 0; i <= end - start; i++){
            arr[start + i] = change[i]
        }
        // console.log(arr.join(""))
        my_string = arr.join("")
    })
    return my_string;
}