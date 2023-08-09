function solution(phone_number) {
    var answer = '';
    let temp = String(phone_number).split('');
    // console.log(temp);
    for(let i = 0; i < temp.length - 4; i++){
        temp[i] = '*'
    }
    // console.log(temp.join(''))
    return temp.join('');
}