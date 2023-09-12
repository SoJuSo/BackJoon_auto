function solution(n, control) {
    //아이디어
    //for문과 if문의 조합으로 간단하게 해결하기보단
    //switch case문 활용해보기
    // break를 잊지말고 넣어주어야 한다. 조건값과 일치하는 조건을 찾은 다음에는 
    // break를 만날때까지 모든 동작을 실행하게 되기 때문이다.
    const arr = control.split('')
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "w" :
                n += 1;
                break;
            case "s" :
                n -= 1;
                break;
            case "d" :
                n += 10;
                break;
            case "a" :
                n -= 10;
                break;
        }
    }
    return n;
}