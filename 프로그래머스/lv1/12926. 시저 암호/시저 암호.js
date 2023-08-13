function solution(s, n) {
    let answer = [];
    // console.log('A'.charCodeAt())
    // console.log('Z'.charCodeAt())
    // console.log('a'.charCodeAt())
    // console.log('z'.charCodeAt())
    // console.log(String.fromCharCode(91))
    s.split('').map((i) => {
        let ascii = i.charCodeAt();
        if(ascii >= 65 && ascii <= 90){
            ascii += n;
            if(ascii > 90){
                ascii -= 26;
            }
        }else if(ascii >= 97 && ascii <= 122){
            ascii += n;
            if(ascii > 122){
                ascii -= 26;
            }
        }
        answer.push(String.fromCharCode(ascii))
    })
    return answer.join('');
}