function solution(my_string) {
    let answer = new Array(52).fill(0);
    // console.log("A".charCodeAt())
    // console.log("Z".charCodeAt())
    // console.log("a".charCodeAt())
    // console.log("z".charCodeAt())
    for(const value of my_string){
        const calculatedIndex = value.charCodeAt()
        if(calculatedIndex < 91){
            answer[calculatedIndex - 65]++;
        }else{
            answer[calculatedIndex - 71]++;
        }
    }
    // console.log(answer)
    return answer;
}