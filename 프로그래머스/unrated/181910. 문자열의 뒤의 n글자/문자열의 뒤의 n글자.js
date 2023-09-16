function solution(my_string, n) {
    //내 아이디어
    //전체 길이 - n 에서 시작해서
    //문장 구성해주고 리턴
    let answer = [];
    const arr = my_string.split('');
    for(let i = arr.length - n; i < arr.length; i++){
        answer.push(arr[i])
    }
    return answer.join('');
    
//     다른 분 풀이
//     역시 JS는 내장함수로 할 수 있는 일이 많다.
    // let answer = ''
    // const ans = (my_string, n) => my_string.slice(my_string.length - n, my_string.length)
    // answer = ans(my_string, n);
    // return answer;
}