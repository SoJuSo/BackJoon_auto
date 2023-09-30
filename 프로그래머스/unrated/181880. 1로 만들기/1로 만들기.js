function solution(num_list) {
    //아이디어
    //순회하며 주어진 조건에 따라 1을 만들어주고 그 횟수를 answer에 ++ 해주자.
    let answer = 0;
    for(const val of num_list){
        let temp = val;
        while(temp > 1){
            if(temp % 2 == 0){
                temp /= 2;
            }else{
                temp = (temp - 1) / 2;
            }
            answer++;
        }
    }
    return answer;
}