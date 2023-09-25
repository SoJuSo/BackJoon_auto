function solution(binomial) {
    //아이디어
    //어떻게 부술까?
    //split(" "으로 나눠서 중간 값에 따라 나누자)
    const arr = binomial.split(' ');
    switch(arr[1]){
        case '+' :
            return Number(arr[0]) + Number(arr[2])
            break;
        case '-':
            return Number(arr[0]) - Number(arr[2])
            break;
        case '*':
            return Number(arr[0]) * Number(arr[2])
            break;
    }
}