function solution(n, slicer, num_list) {
    let answer = [];
    switch(n){
        case 1:
            answer = num_list.slice(0, slicer[1] + 1)
            break;
        case 2:
            answer = num_list.slice(slicer[0], num_list.length)
            break;
        case 3:
            answer = num_list.slice(slicer[0], slicer[1] + 1)
            break;
        case 4:
            const temp = num_list.slice(slicer[0], slicer[1] + 1)
            // console.log(slicer[1])
            temp.map((value, index) => {
                // console.log(value, index)
                if(index % slicer[2] === 0){
                    // console.log(value)
                    answer.push(value)
                    // console.log(answer)
                }
            })
            break;
            
    }
    return answer;
}