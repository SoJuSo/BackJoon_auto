function solution(my_string, indices) {
    //아이디어
    //생각을 바꿔서
    //indices에 index 숫자가 있으면 answer에 더해주지 않는다.
    let answer = '';
    indices.sort((a,b) => {return a - b});
    let cnt = 0;
    for(let i = 0; i < my_string.length; i++){
        if(indices[cnt] == i){
            cnt++;
        }else{
            answer += my_string[i]
        }
    }
    
    return answer;
}