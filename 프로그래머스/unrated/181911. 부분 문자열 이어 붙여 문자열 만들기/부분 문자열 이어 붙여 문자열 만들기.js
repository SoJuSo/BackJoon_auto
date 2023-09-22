function solution(my_strings, parts) {
    //아이디어
    //이번 경우에는 다른 문제와 달리 for문으로 푸는게 더 효율적일 것 같다
    //근데 2중포문 쓰면 될거같은데
    //더 간단하게는 안되남..
    //방법을 찾았다! split(''), slice('')
    let answer = '';
    my_strings.forEach((val, index) => {
        answer += my_strings[index].split('').slice(parts[index][0], parts[index][1] + 1).join('')
    })
    return answer;
}