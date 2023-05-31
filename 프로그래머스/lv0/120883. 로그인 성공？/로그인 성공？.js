function solution(id_pw, db) {
    var answer = 'fail';
    db.map(i => 
           {if(id_pw[0] == i[0]){
            if(id_pw[1] == i[1]){
                answer = 'login';
            }else if(id_pw[1] != i[1]){
                answer = 'wrong pw'
            }
        }}
    )
    return answer;
}