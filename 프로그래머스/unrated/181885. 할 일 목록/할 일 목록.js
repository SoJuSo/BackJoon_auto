function solution(todo_list, finished) {
    //아이디어
    //finished배열을 순회하며 false인 경우 해당 인덱스에 해당하는 todo_list를
    //answer에 push한다.
    let answer = [];
    finished.forEach((val, index) => {
        if(!val){
            answer.push(todo_list[index])
        }
    })
    return answer;
}