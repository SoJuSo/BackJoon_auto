function solution(my_string, is_suffix) {
    //아이디어
    //처음엔 includes를 생각했지만 문제 조건이 달랐다.
    //일단 생각나는 해결법으론
    //my_string으로 주어진 단어의 접미사를 담은 배열을 만들고
    //if_suffix와 비교해서 같은 값이 있다면 1을 아니면 그대로 0 값을 가져가는 방식을 생각했다.
    let answer = 0;
    let arr = [];
    for(let i = 0; i < my_string.length; i++){
        arr.push(my_string.slice(i, my_string.length))
    }
    arr.forEach(val => {
        if(val == is_suffix){
            answer = 1;
        }
    })
    return answer;
}