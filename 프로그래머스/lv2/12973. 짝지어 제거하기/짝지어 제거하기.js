function solution(s){
    //아이디어
    //문자열의 길이 1000000이하의 자연수
    //문자열은 모두 소문자.
    //재귀로 풀어야하나?
    //index, index - 1이 같은 케이스가 안나올때까지 -> 비효율적일수도..?
    //문자열을 순회하며 replace를 사용해서 바꾸고 i = 0으로 약간 재귀 느낌으로 했는데
    //TC 일부 실패 및 효율성 테스트 TimeOut
    //힌트 -> 시간복잡도가 O(n) or O(nlogn) 안에 해야한다 + 스택으로 구현해보라
    let answer = -1;
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(arr[arr.length - 1] == s[i]){
            arr.pop()
        }else{
            arr.push(s[i])
        }
    }
    return arr.length > 0 ? 0 : 1;
}