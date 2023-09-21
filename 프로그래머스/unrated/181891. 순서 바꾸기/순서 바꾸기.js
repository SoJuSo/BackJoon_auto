function solution(num_list, n) {
    //아이디어
    //slice로 배열을 나눠주고 합쳐주자
    return num_list.slice(n, num_list.length).concat(num_list.slice(0, n));
}