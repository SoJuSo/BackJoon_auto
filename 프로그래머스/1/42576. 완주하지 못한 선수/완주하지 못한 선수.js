function solution(participant, completion) {
    // 최대 input 100,000
    const list = new Object();
    participant.forEach((val) => {
        if(list[val] === undefined){
            list[val] = 1;
        }else if(list[val]){
            list[val]++;
        }
    })
    completion.forEach((val) => {
        if(list[val]){
            if(list[val] === 1){
                delete list[val];
            }else{
                list[val]--;
            }
        }
    })
    // console.log(Object.keys(list))    
    return Object.keys(list)[0];
}