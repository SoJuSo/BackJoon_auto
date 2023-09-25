function solution(my_string, overwrite_string, s) {
    //아이디어
    //주어진 조건에 따라서 문자열을 나누어 주면 된다
    let answer = '';
    // console.log(my_string.slice(s, s + overwrite_string.length))
    // console.log(my_string.slice(0, s))
    // console.log(my_string.slice(s + overwrite_string.length, my_string.length + 1))
    answer += my_string.slice(0, s);
    answer += overwrite_string
    answer += my_string.slice(s + overwrite_string.length, my_string.length + 1)
    return answer;
}