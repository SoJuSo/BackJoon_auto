function solution(ingredient) {
    let answer = 0;
    const arr = [1,2,3,1];
    let temp_ingredient = ingredient;
    //아이디어
    //1231이 반복되면 그걸 빼고 answer++ 그리고 빠진 배열에서 다시 search(재귀)
    //splice() -> 원본이 바뀌므로 slice() 사용
    let i = 0;
    while(1){
        if(temp_ingredient[i] == 1 && temp_ingredient[i + 1] == 2 && temp_ingredient[i + 2] == 3 && temp_ingredient[i + 3] == 1){
            temp_ingredient.splice(i, 4);
            answer++;
            if(i !== 0){
                i = i - 3;
            }
        }else if(i > temp_ingredient.length - 3){
            break;
        }else{
            i++
        }
        // console.log(temp_ingredient)
        // i++
        // if(i > 100){break;}//임시 조건
        /* 기존코드
        if(temp_ingredient[i] == 1 && temp_ingredient[i + 1] == 2 && temp_ingredient[i + 2] == 3 && temp_ingredient[i + 3] == 1){
            console.log(i);
            if(temp_ingredient[i + 6] != 1){
                temp_ingredient = temp_ingredient.slice(0, i).concat(temp_ingredient.slice(i + 4, temp_ingredient.length))
                console.log(temp_ingredient)
                i = -1;//아래서 바로 ++가 되므로
                answer++;
            }
        }
        i++;
        // console.log(i)
        if(i > 10000){break;}//임시 조건
        */
    }
    //언제 탈출문을 걸어줄것인가
    return answer;
}
//30분 초과 다른 코드 참조 -> stack으로 해결 or 