function solution(n_str) {
    //아이디어
    //맨 앞 문자열이 0이 아닐때까지 0을 ""으로 바꿔주면 될 것 같다.
    while(n_str[0] == 0){
        n_str = n_str.replace("0", "")
    }
    return n_str;
}