function solution(arr, n) {
    //아이디어
    //홀짝을 판별하는 bool 변수를 만들고 조건에 따라 반복문 설정 후 arr 인덱스 값을 return
    let bool = true;
    arr.length % 2 == 0 ? 1 : bool = false; //true 짝수, false 홀수
    if(bool){
        for(let i = 0; i < arr.length; i++){
            if(i % 2 == 1){
                arr[i] += n
            }
        }
    }else{
        for(let i = 0; i < arr.length; i++){
            if(i % 2 == 0){
                arr[i] += n
            }
        }
    }
    return arr;
}