function solution(num_list) {
    //아이디어
    //num_list의 길이에 따라 판별하는 bool 변수 선언 후
    //bool 변수 값에 따라서 값을 다르게 적용
    let answer = 0;
    let bool = true;
    num_list.length > 10 ? bool = true : bool = false;
    if(bool){
        num_list.map(num => {answer += num})
    }else{
        num_list.map(num => {
            if(answer == 0){
                answer = 1
            } 
            answer *= num
        })
    }
    return answer;
}