function solution(my_string, is_prefix) {
    //아이디어
    //개인적으로 이런케이스에 약한듯 싶다
    //둘 다 배열로 잘라서 is_prefix의 길이만큼 반복문을 돌리며 my_string과 비교하다가
    //다른값이 나오면 break; 하고 answer에 0 할당
    let answer = 1;
    const arr_str = my_string.split('');
    const arr_pre = is_prefix.split('');
    
    for(let i = 0; i < arr_pre.length; i++){
        if(arr_str[i] != arr_pre[i]){
            answer = 0;
            break;
        }
    }
    
    return answer;
}