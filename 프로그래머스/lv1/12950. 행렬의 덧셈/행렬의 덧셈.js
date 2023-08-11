function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        let arr = [];//여기서 빈 배열을 만들어서 push해주면 됌
        for(let j = 0; j < arr1[0].length; j++){
            // console.log(arr1[i][j] + arr2[i][j]);
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(arr);
    }
    return answer;
}