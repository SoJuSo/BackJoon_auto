function solution(num_list) {
    //아이디어
    //곱, 합의 제곱을 저장하는 변수 만들고
    //numlist 순회하며 각각 파싱
    //이후 비교해서 리턴
    let multi = 1;
    let square = 0;
    //forEach 대신 num을 사용하는 이유 -> forEach() 기존의 Ararry를 변경하는 반면, map()은 새로운 Ararry를 반환해서
    //map이 더 빠름, 하지만 원본배열 변경시 forEach가 유리
    num_list.map((num) => {
        multi *= num;
        square += num;
    })
    //삼항연산자로 간단히
    return multi < square ** 2 ? 1 : 0;
} 