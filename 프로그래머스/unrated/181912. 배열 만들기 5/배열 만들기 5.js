function solution(intStrs, k, s, l) {
    //아이디어
    //주어진 조건대로
    //배열을 순회하며 문자열을 조건대로 자르고 숫자로 파싱한 후
    //값을 비교해서 k 보다 크면 answer배열에 push한다.
    let answer = [];
    intStrs.forEach((val) => {
        const parsed = Number(val.slice(s, s + l));
        parsed > k ? answer.push(parsed) : 0;
    })
    return answer;
}