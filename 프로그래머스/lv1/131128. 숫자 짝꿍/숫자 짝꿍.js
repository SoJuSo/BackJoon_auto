function solution(X, Y) {
    let answer = [];
    //아이디어
    //객체에 각각 저장해서 객체를 비교하며 같은 값이 있는지 비교한다. 이때 없다면 answer에 -1을 하고
    //있다면 answer에 push해 놓은 뒤 내림차순으로 정렬한 후 join('')한 값을 리턴한다. 
    let xobj = {};
    let yobj = {};
    const x_arr = X.split('')
    const y_arr = Y.split('')
    for(let i = 0; i < x_arr.length; i++){
        if(xobj[x_arr[i]] === undefined){
            xobj[x_arr[i]] = 1;
        }else{
            xobj[x_arr[i]]++;
        }
    }
    
    for(let i = 0; i < y_arr.length; i++){
        if(yobj[y_arr[i]] === undefined){
            yobj[y_arr[i]] = 1;
        }else{
            yobj[y_arr[i]]++;
        }
    }
    //시간복잡도 O(n^2)으로 푸는 방법 밖에 안떠오른다
    const x_ans = Object.entries(xobj)
    const y_ans = Object.entries(yobj)
    // console.log(x_ans)
    // console.log(y_ans)
    for(let i = 0; i < x_ans.length; i++){
        for(let j = 0; j < y_ans.length; j++){
            if(x_ans[i][0] === y_ans[j][0]){
                //while문 사용시 시간복잡도가..?
                while(x_ans[i][1] !== 0 && y_ans[j][1] !== 0){
                    // console.log(x_ans[i], y_ans[j])
                    answer.push(x_ans[i][0])
                    x_ans[i][1]--;
                    y_ans[j][1]--;
                    // console.log(x_ans[i],y_ans[j])
                    // answer.push(x_ans[i][0])
                }
            }
        }
        // console.log(x_ans)
        // console.log(y_ans)
        // console.log()
    }
    // console.log(x_ans, y_ans)
    if(answer.length === 0){
        return "-1"
    }else{
        // console.log(String(Number(answer.sort((a,b) => (b - a)).join(''))))
        // return String(Number(answer.sort((a,b) => (b - a)).join('')))
        //0이 아닌 수가 나오면 제대로 0만 나오면 return 0
        let cnt = 0;
        let temp = 0;
        while(1){
            if(answer[cnt] != 0){
                // console.log(answer[cnt])
                temp = 1;
                break;
            }
            cnt++;
            if(cnt == answer.length){
                break;
            }
        }
        if(temp == 1){
            return answer.reverse().join('')
        }else{
            return "0"
        }
    }
}
//1회 제출 TC 6~15 실패
//예상은 너무 큰 수?
//2회 제출 Number() 숫자로 변환하는 경우 너무 커서 안됐음 특히 sort는 숫자로 변환하기에 reverse() 사용할것
//0에 대한 예외처리 하면 정답 될듯