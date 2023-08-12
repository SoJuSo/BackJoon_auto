function solution(food) {
    var answer = [];
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i] / 2); j++){
            answer.push(i);
        }
    }
    
    answer.push(0)
    
    for(i = food.length - 1; i > 0; i--){
        // console.log(i)
        for(j = 0; j < Math.floor(food[i] / 2); j++){
            // console.log('123' + j)
            answer.push(i);
        }
        // console.log()
    }
    // console.log(food.length)
    // console.log(typeof(food))
    // String(food).split('').map(i => {if(!isNaN(i)){console.log(Math.floor(i / 2))}})
    return answer.join('');
}