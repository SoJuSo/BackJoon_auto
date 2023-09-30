function solution(my_string, s, e) {
    //아이디어
    //주어진 조건에 따라 자르고 돌려주고 해서 리턴한다
    //근데 왜 e + 1일까..? 아직 약간 slice에 대한 이해가 부족한 듯 싶다..
    let answer = '';
    answer += my_string.slice(0, s)
    // answer += ' '
    // console.log(my_string.slice(s, e + 1))
    answer += my_string.slice(s, e + 1).split('').reverse().join('')
    answer += my_string.slice(e + 1, my_string.length)
    return answer;
}