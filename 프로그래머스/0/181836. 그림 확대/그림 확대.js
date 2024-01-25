function solution(picture, k) {
    const answer = []
    picture.map((val) => {
        const newValue = val.split('').map((value) => {
            const temp = []
            for(let i = 0; i < k; i++){
                temp.push(value)
            }
            return temp.join('')
        }).join('')
        for(let j = 0; j < k; j++){
            answer.push(newValue)
        }
    })
    return answer;
}