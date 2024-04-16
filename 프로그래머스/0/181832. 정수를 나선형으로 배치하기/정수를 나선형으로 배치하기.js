// function solution(n) {
//     const answer = Array.from({length: n}, () => 
//         Array.from({length:n}, () => 0)
//     )
//     const target = n * n;
//     let row = col = 0;
//     let dir = 'r';
//     for(let i = 1; i <= target; i++){
//         answer[row][col] = i;
//         switch(dir){
//             case 'r':
//                 col++;
//                 if(typeof answer[row][col + 1] !== 'number' || answer[row][col + 1] !== 0){
//                     dir = 'd'
//                 }
//                 break;
//             case 'd':
//                 row++
//                 if(typeof answer[row + 1][col] !== 'number' || answer[row + 1][col] !== 0){
//                     dir = 'l'
//                 }
//                 break;
//             case 'l':
//                 col--;
//                 if(typeof answer[row][col - 1] !== 'number' || answer[row][col - 1] !== 0){
//                     dir = 'u'
//                 }
//                 break;
//             case 'u':
//                 row--;
//                 if(typeof answer[row - 1][col] !== 'number' || answer[row - 1][col] !== 0){
//                     dir = 'u'
//                 }
//                 break;
//         }
//     }
//     console.log(answer)
// }
function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1; // 채워야 할 정수 값
    let row = 0; // 현재 행 위치
    let col = 0; // 현재 열 위치
    let direction = 0; // 이동 방향 (0: 오른쪽, 1: 아래, 2: 왼쪽, 3: 위)

    while (value <= n * n) { // 모든 정수 값을 배열에 채우면 종료
        answer[row][col] = value++; // 현재 위치에 값을 채우고 다음 값으로 이동

        // 다음 이동할 위치 계산
        if (direction === 0) { // 오른쪽 방향으로 이동
            if (col === n - 1 || answer[row][col + 1] !== 0) { // 오른쪽 값이 채워져 있다면
                direction = 1;
                row++;
            } else {
                col++;
            }
        } else if (direction === 1) { // 아래쪽 방향으로 이동
            if (row === n - 1 || answer[row + 1][col] !== 0) { // 아래쪽 값이 채워져 있다면
                direction = 2;
                col--;
            } else {
                row++;
            }
        } else if (direction === 2) { // 왼쪽 방향으로 이동
            if (col === 0 || answer[row][col - 1] !== 0) { // 왼쪽 값이 채워져 있다면
                direction = 3;
                row--;
            } else {
                col--;
            }
        } else if (direction === 3) { // 위쪽 방향으로 이동
            if (row === 0 || answer[row - 1][col] !== 0) { // 위쪽 값이 채워져 있다면
                direction = 0;
                col++;
            } else {
                row--;
            }
        }
    }

    return answer;
}
