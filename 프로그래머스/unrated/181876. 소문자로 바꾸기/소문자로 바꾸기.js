function solution(myString) {
    //JS 내장함수로 구성할 수 있는 간단한 방법
    // return myString.toLowerCase();
    //하지만 ascii code도 못외우는 내가 미워서 찾아보는 ascii code로 변환하기
    //charCodeAt() 이라는 메서드로 JS에서는 문자의 아스키코드 번호 도출 가능
    //fromCharCode() 메서드로 아스키코드 -> 문자로 변경 가능
    //JS메서드는 편하다 잘 외우자..
    const arr = myString.split('');
    let answer = arr.map((i) => {
        if(i < 'Z'){
            return String.fromCharCode(Number(i.charCodeAt()) + 32)
        }else{
            return i
        }
    })
    // console.log(String.fromCharCode(66))
    // console.log(answer)
    return answer.join('')
}