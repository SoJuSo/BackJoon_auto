function solution(number) {
    //아이디어
    //주어진 조건에 따라 구현해준다.
    //근데 문제가 왜이래..?
    let temp = 0;//합을 저장할 변수
    for(const val of number){
        temp += Number(val)
        // console.log(val)
    }
    // console.log(temp, temp % 9)
    return temp % 9;
}