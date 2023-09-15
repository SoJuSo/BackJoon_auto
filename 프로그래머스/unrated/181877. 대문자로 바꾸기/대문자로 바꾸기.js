function solution(myString) {
    //아이디어
    //아래와 같은 초간단 해법이 있지만
    // return myString.toUpperCase();
    // ascii code로 풀어보자면
    const arr = myString.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 'Z'){
            arr[i] = String.fromCharCode(Number(arr[i].charCodeAt()) - 32)
        }
    }
    return arr.join('')
    // console.log('A'.charCodeAt())
    // console.log('Z'.charCodeAt())
    // console.log('a'.charCodeAt())
    // console.log('z'.charCodeAt())
}