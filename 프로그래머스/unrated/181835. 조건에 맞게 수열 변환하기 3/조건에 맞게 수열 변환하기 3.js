function solution(arr, k) {
    //아이디어
    //k에 따라 판별하는 변수 bool을 만들어주고 반복문 돌려서 새로운 배열을 리턴해준다
    let answer = [];
    let bool = true
    k % 2 == 0 ? 1 : bool = false;
    if(bool){
        for(let i = 0; i < arr.length; i++){
            answer.push(arr[i] + k);
        }
    }else{
        for(let i = 0; i < arr.length; i++){
            answer.push(arr[i] * k);
        }
    }
    //뭔가 아쉽다. for문을 2번쓴다. 하지만 그렇다고 for문 안에 if문을 넣어주면 연산이 더 많아질것같다.
    //더 좋은 방법이 없나 리서치해봤는데 JS 자료는 없넴..
    return answer;
}