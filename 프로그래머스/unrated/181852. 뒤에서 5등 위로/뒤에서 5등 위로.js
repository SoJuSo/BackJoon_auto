function solution(num_list) {
    //아이디어
    //제약조건이 조금 있는 케이스
    //우선 0~4번째 인덱스는 값에 안들어가므로 i = 5 부터 시작
    //배열에 5개까지 담기 위한 cnt 변수 생성 및 변수 카운트
    //cnt == 5이면 반복문 종료
    //라고 생각했늗네 그런조건은 없었따...
    let answer = [];
    num_list.sort((a,b) => a - b);
    for(let i = 5; i < num_list.length; i++){
        answer.push(num_list[i])
    }
    return answer;
}