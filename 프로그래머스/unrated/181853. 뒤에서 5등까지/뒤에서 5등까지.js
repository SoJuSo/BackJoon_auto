function solution(num_list) {
    //아이디어
    //정렬해서 0~4번인덱스까지 리턴
    return num_list.sort((a,b) => a - b).slice(0,5);
}