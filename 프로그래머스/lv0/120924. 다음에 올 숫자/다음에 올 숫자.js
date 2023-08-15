function solution(common) {
    var answer = 0;
    if(Number((common[2] + common[0]) / 2) === common[1]){
        answer = common[common.length - 1] + (common[2] - common[1])
    }else{
        answer = common[common.length - 1] * (common[2] / common[1])
    }
    return answer;
}