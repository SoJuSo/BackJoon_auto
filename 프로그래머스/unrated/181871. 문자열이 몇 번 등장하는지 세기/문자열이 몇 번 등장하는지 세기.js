function solution(myString, pat) {
    //아이디어
    //mystring을 순회하며 확인하기
    let answer = 0;
    myString.split('').map((val, index) => {
        if(pat[0] === val){
            let checker = true;
            let index_2 = index
            pat.split('').map(val_2 => {
                if(val_2 !== myString[index_2]){
                    checker = false;
                }
                index_2++;
            })
            checker && answer++;
        }
    })
    return answer;
}