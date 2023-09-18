function solution(my_string, index_list) {
    //!! 항상 문제 먼저 읽고 흐름 정리하는 습관 가지기
    //아이디어
    //문자열에서 인덱스 값으로 n번째 위치의 문자를 찾는것이 가능하다.
    //index_list 반복문 돌리며 my_string[index]의 값을 answer에 push후 join해서 값 리턴
    let answer = [];
    index_list.forEach((val) => {
        answer.push(my_string[val]);
    })
    return answer.join('');
}