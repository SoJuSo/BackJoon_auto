function solution(keyinput, board) {
    var answer = [];
    let x_len = Math.floor(board[0] / 2);        
    let y_len = Math.floor(board[1] / 2);
    let x_cord = 0, y_cord = 0;
    
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] == "left" && x_cord > x_len * -1){
            x_cord -= 1;
        }else if(keyinput[i] == "right" && x_cord < x_len){
            x_cord += 1;
        }else if(keyinput[i] == "down" && y_cord > y_len * -1){
            y_cord -= 1;
        }else if(keyinput[i] == "up" && y_cord < y_len){
            y_cord += 1;
        }
    }
    answer.push(x_cord)
    answer.push(y_cord)
    return answer;
}