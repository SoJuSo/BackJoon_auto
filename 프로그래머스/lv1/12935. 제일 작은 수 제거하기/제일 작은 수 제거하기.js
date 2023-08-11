function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);//현재 0번째 최소값
    arr.splice(arr.indexOf(min), 1);
    // console.log(arr)
    answer = arr.length ? arr : [-1];
    return answer;
    //애초에 정렬하는 문제가 아니였음
}

