function solution(numlist, n) {
    var answer = [];
//  numlist.sort(function(a, b){return b - a;});
    numlist.sort(
        function(a, b){
            return Math.abs(a - n) - Math.abs(b - n) || b - a;
        }
    );
    //sort에서 해결하는 방식으로 풀이
    // numlist.map(i => {
    //     console.log(i)
    // });
    return numlist;
}