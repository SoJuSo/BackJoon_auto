function solution(polynomial) {
    let answer = '';
    let xnum = 0;
    let num = 0;
    // console.log(polynomial.split('+'))
    let temp = polynomial.split(' + ');
    for(let i = 0; i < temp.length; i++){
        if(!isNaN(temp[i])){
            if(temp[i] !== 0){
                num += Number(temp[i]);
            }
        }else if(temp[i].split('').map(i => i === 'x')){
            if(!(temp[i] === 'x')){
                let cnt = -1;
                for(let j = temp[i].split('').length - 1; j >= 0; j--){
                    if(!isNaN(temp[i].split('')[j])){
                        xnum += Number(temp[i].split('')[j] * (10 ** cnt))
                    }
                    // console.log(temp[i].split('')[j], j, cnt)
                    cnt++;
                }
            }else{
                xnum++;
            }
        }
    }
    // console.log(num, xnum)
    if(xnum === 0 && num !== 0){
        answer += String(num)
    }else if(xnum === 1 && num !== 0){
        answer += 'x' + ' + ' + String(num)
    }else if(xnum !== 1 && num !== 0){
        answer += String(xnum) + 'x' + ' + ' + String(num)
    }else if(xnum !== 1 && num === 0){
        answer += String(xnum) + 'x'
    }else if(xnum === 1 && num === 0){
        answer += 'x'
    }
    // console.log(answer)
    return answer;
}