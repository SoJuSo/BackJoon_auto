function solution(cards1, cards2, goal) {
    let answer = "Yes";
    //아이디어
    //약간 기계처럼? 구성 goal을 순회하며 card1과 card2에서 맞는 단어를 찾아서
    //0,1,2,3... 이렇게 순서대로 가는지 체크하면 되지 않을까?
    //시간복잡도는...? 일단 문제풀이부터
    //단어 중복의 경우엔?
    //불필요하게 탐색해서 비효율적
    let card1_cnt = 0;
    let card2_cnt = 0;
    goal.forEach(text => {
        for(let i = 0; i < cards1.length; i++){
            if(cards1[i] == text){
                card1_cnt++;
                if(card1_cnt - 1 != i){
                    // console.log("NO")
                    answer = "No"
                }
            }
        }
        
        for(let l = 0; l < cards2.length; l++){
            if(cards2[l] == text){
                card2_cnt++;
                if(card2_cnt - 1 != l){
                    // console.log("NO")
                    answer = "No"
                }
            }
        }
        // console.log()
    })
    return answer;
}