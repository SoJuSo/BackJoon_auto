function solution(babbling) {
    //아이디어
    //babbling을 순회하며 해당 값이  "aya", "ye", "woo", "ma" 로 만들어 질 수 있는지 판별하고 맞다면 answer++
    //방식을 어떻게 할것인가?
    //const로 네 가지 발음 저장해두고 babbling을 split('')해서 비교?
    //재귀..?
    //결국 시간초과로 다른 분 풀이 참조
    //해당 공간을 replace() 메서드를 사용해 공백 또는 특정한 것으로 바꾸어 해결 
    let answer = 0;
    for(let i = 0; i < babbling.length; i++){
        let temp = babbling[i];
        temp = temp.replaceAll("aya", "1");
        temp = temp.replaceAll("ye", "1")
        temp = temp.replaceAll("woo", "1")
        temp = temp.replaceAll("ma", "1")
        temp = temp.replaceAll("1", "");
        // console.log(temp)
        if(temp.length == 0){
            answer++;
        }
    }
    return answer;
}