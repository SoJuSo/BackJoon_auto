function solution(k, m, score) {
    let answer = 0;
    //아이디어
    //정렬해서 주어진 조건에 맞게 배열 생성 및 계산
    //개수 조건을 만족하지 못하는 경우에는 pass
//     while문 실패
    // let temp = score.sort((a,b) => (b - a));//역순 정렬
    // while(1){
    //     if(temp.length < m){
    //         break;
    //     }else{
    //         answer += temp[2] * m;
    //         for(let i = 0; i < m; i++){
    //             temp.shift();
    //         }
    //     }
    // }
    let temp = score.sort((a,b) => (b - a));//역순 정렬
    for(let i = m; i <= temp.length; i = i + m){
        answer += temp[i - 1] * m;
    }
    return answer;
}