function solution(num_str) {
    //아이디어
    //문자열을 분리한 배열을 만들고
    //해당 배열을 순회하며 Number()메서드를 통해 숫자로 선언해주고 answer에 더해준다.
    let answer = 0;
    const arr = num_str.split('')
    arr.forEach(val => {answer += Number(val)})
    return answer;
}