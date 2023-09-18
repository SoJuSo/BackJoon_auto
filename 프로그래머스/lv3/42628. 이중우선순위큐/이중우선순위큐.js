function solution(operations) {
    //아이디어
    //결국에는 조건에 따른 큐 이므로
    //문제 조건에 따라 반복문을 수행하며
    //구현해준다.
    
    let answer = [0, 0];
    let queue = [];
    operations.forEach((val) => {
        const temp = val.split(' ');
        // console.log(temp)
        switch(temp[0]){
            case 'I':
                queue.push(temp[1]);
                if(queue.length > 1){queue.sort((a,b) => a - b);}
                break;
            case 'D':
                if(temp[1] == 1){
                    queue.pop()
                }else{
                    queue.shift()
                }
                break;
        }
        // console.log(queue)
    })
    if(queue.length > 1){
        answer[0] = Number(queue[queue.length - 1]);
        answer[1] = Number(queue[0]);
    }
    return answer;
}