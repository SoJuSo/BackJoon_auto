function solution(my_string, k) {
    //아이디어
    //k번만큼 answer에 my_string을 더해준다.
    let answer = '';
    let i = 0;
    while(i != k){
        answer += my_string;
        i++;
    }
    return answer;
}