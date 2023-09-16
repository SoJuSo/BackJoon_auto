function solution(num_list) {
    //아이디어
    //일반적인 경우에는 if연산을 안거치기에 answer의 디폴트값을 -1으로 해두고
    //배열에 음수를 만나는 경우에만 answer에 리턴해주고 첫 번쨰 음수 값만 구하니 바로 break로 멈춰준다.
    let answer = -1;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] < 0){
            answer = i;
            break;
        }
    }
    return answer;
}