function solution(num_list) {
    //아이디어
    //반복문이 필요 없다 마지막, 마지막 직전 원소끼리 비교하면 된다.
    //비교 후 조건에 따라 num_list에 push하고 리턴
    const len = num_list.length - 1;
    if(num_list[len] > num_list[len - 1]){
        num_list.push(num_list[len] - num_list[len - 1])
    }else{
        num_list.push(num_list[len] * 2)
    }
    return num_list
}