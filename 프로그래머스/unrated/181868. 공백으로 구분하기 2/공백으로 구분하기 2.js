function solution(my_string) {
    //아이디어
    //다 나눠서
    //순회하며 공백을 제외하고 answer에 push
    let answer = [];
    my_string.split(' ').forEach((val) => {
        if(val != ""){
            answer.push(val)
        }
    })
    return answer;
}