function solution(flo) {
    //아이디어
    //JS에서 정수부를 반환하는 메서드는 매우 다양한데
    //나같은 경우에는 내림을 해줘버린다.
    //하지만 정수부를 추출하는 Math.trunc(flo) 메서드가 더 적합하다.
    return Math.trunc(flo);
}