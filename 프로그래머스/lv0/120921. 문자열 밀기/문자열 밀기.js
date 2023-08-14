function solution(A, B) {
    let answer = 0;
    let temp = B + B;
    console.log(temp.indexOf(A))
    answer = temp.indexOf(A);
    //신기하다 js의 원리를 다 알면 이렇게 푸는듯...
    
    return answer;
}