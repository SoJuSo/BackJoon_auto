function solution(num_list) {
    //간단한 코딩이여도 아이디어 적기!
    //아이디어
    //짝수, 홀수를 저장하는 배열을 만들어주고
    //map() 메서드로 주어진 배열 순회하며 홀짝 판단후 맞는 배열에 저장
    //이후 취합해서 Number으로 바꿔주고 return
    let odd = [];
    let even = [];
    num_list.map((num) => {
        if(num % 2 == 0){
            even.push(num);
        }else{
            odd.push(num);
        }
    })
    return Number(even.join('')) + Number(odd.join(''))
}