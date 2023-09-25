function solution(arr, intervals) {
    //아이디어
    //주어진 조건에 따라 배열을 생성한다.
    //그리고 concat으로 합쳐준다.
    return arr.slice(intervals[0][0], intervals[0][1] + 1).concat(arr.slice(intervals[1][0], intervals[1][1] + 1));
}