function solution(score) {
    var answer = [];
    for(let i = 0; i < score.length; i++){
        let ave = (score[i][0] + score[i][1]) / 2; //평균을 구했다.
        let rank = 1;//디폴트 랭크값은 1이다.
        //나보다 평균이 크거나 같으면 rank++; 모든 경우의 수가 끝나면 answer에 push
        score.map(i => {
            if((i[0] + i[1]) / 2 > ave){
            rank++;
            }
        });
        answer.push(rank);
    }

    return answer;
}