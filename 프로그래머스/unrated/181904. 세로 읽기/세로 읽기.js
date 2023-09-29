function solution(my_string, m, c) {
    //아이디어
    //주어진 조건에 따라 문자열을 나눠주고 이후 c의 index값을 쭉 더해준다.
    let answer = '';
    let temp = ''
    my_string.split('').forEach((val) => {
        temp += val;
        if(temp.length == m){
            answer += temp[c - 1]; 
            temp = ''
        }
    })
    
    return answer;
}