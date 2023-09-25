function solution(numbers, hand) {
    //아이디어
    //일단 2차원 배열 keypad 생성하고
    //왼손, 오른손 위치 저장하는 변수 만들고
    //1,4,7,*은 무조건 왼손
    //3,6,9.#은 무조건 오른손
    //2,5,8,0은 가중치에 따라서
    // const keypad = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9],
    //     ['*', 0, '#']
    // ]
    //이렇게 선언하니까 위치좌표 찾기가 넘 힘들다.
    //그냥 좌표를 선언해버리자
    //그리고 점과 점 사이의 거리 해버리자
    let answer = '';
    const keypad = [//0,1,2,3,4 ~ 순서이므로 0번의 좌표를 맨 앞으로
        [3,1], 
        [0,0], [0,1], [0,2],
        [1,0], [1,1], [1,2],
        [2,0], [2,1], [2,2],
    ]
    // console.log(keypad[1])
    let left_loc = [3,0];
    let right_loc = [3,2];
    numbers.forEach((val) => {
        if(val == 1 || val == 4 || val == 7 || val == '*'){
            answer += 'L';
            left_loc = keypad[val];
        }else if(val == 3 || val == 6 || val == 9 || val == '#'){
            answer += 'R';
            right_loc = keypad[val];
        }else{
            // console.log(left_loc, right_loc)
            const left_dis = Math.abs(keypad[val][0] - left_loc[0]) + Math.abs(keypad[val][1] - left_loc[1])
            const right_dis = Math.abs(keypad[val][0] - right_loc[0]) + Math.abs(keypad[val][1] - right_loc[1])
            // console.log(keypad[val], val, left_loc, right_loc)
            // console.log(left_dis, right_dis)
            if(left_dis < right_dis){
                answer += 'L';
                left_loc = keypad[val];
            }else if(left_dis > right_dis){
                answer += 'R';
                right_loc = keypad[val];
            }else{
                if(hand == "right"){
                    answer += 'R';
                    right_loc = keypad[val];
                }else{
                    answer += 'L';
                    left_loc = keypad[val];
                }
            }
        }
        // console.log(left_loc, right_loc)
    })
    return answer;
}