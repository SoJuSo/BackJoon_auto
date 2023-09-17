function solution(answers) {
    //아이디어
    //1번 수포자는 1,2,3,4,5
    //2번 수포자는 2,1,2,3,2,4,2,5
    //3번 수포자는 3,3,1,1,2,2,4,4,5,5
    //위 내용을 담은 배열 저장 후 각 조건에 맞게 answers 순회하여 각 수포자의 정답의 개수 저장
    //각 수포자의 값을 비교 후 answer에 push
    let answer = [];
    const arr_1 = [1,2,3,4,5];
    const arr_2 = [2,1,2,3,2,4,2,5];
    const arr_3 = [3,3,1,1,2,2,4,4,5,5];
    let one_cnt = 0;
    let two_cnt = 0;
    let thr_cnt = 0;
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == arr_1[i % arr_1.length]){
            // console.log('1 ',i % arr_1.length);
            one_cnt++;
        }
        if(answers[i] == arr_2[i % arr_2.length]){
            // console.log('2 ',i);
            two_cnt++;
        }
        if(answers[i] == arr_3[i % arr_3.length]){
            // console.log('3 ', i);
            thr_cnt++;
        }
    }
    if(one_cnt >= two_cnt && one_cnt >= thr_cnt){// 1이 제일 큰 경우
        answer.push(1);
        if(one_cnt >= two_cnt){
            if(one_cnt == two_cnt){
                answer.push(2)
            }
        }
        if(one_cnt >= thr_cnt){
            if(one_cnt == thr_cnt){
                answer.push(3)
            }
        }
    }else if(two_cnt >= one_cnt && two_cnt >= thr_cnt){// 2가 제일 큰 경우
        answer.push(2);
        if(two_cnt >= one_cnt){
            if(two_cnt == one_cnt){
                answer.push(1)
            }
        }
        if(two_cnt >= thr_cnt){
            if(two_cnt == thr_cnt){
                answer.push(3)
            }
        }
    }else if(thr_cnt >= one_cnt && thr_cnt >= two_cnt){// 3이 제일 큰 경우
        answer.push(3);
        if(thr_cnt >= one_cnt){
            if(thr_cnt == one_cnt){
                answer.push(1)
            }
        }
        if(thr_cnt >= two_cnt){
            if(thr_cnt == two_cnt){
                answer.push(2)
            }
        }
    }
    // console.log(one_cnt, ' ', two_cnt, ' ', thr_cnt)
    //무작위로 값을 넣었으므로 오름차순 정렬
    return answer.sort();
}