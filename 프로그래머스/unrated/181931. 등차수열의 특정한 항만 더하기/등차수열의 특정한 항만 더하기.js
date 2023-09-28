function solution(a, d, included) {
    //아이디어
    //주어진 조건에 따라 합을 구현해 준다.
    //included의 길이 만큼 포문을 돌려주고 만약 included가 true이면 더해주고 아니면 넘어간다
    let answer = 0;
    for(const val of included){
        val ? answer += a : 0;
        a += d;
    }
    return answer;
}