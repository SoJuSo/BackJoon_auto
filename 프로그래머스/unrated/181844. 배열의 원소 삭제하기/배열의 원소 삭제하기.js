function solution(arr, delete_list) {
    //아이디어
    //생각을 바꿔라
    //arr순회하며 deletelist에 있는 지 체크하고
    // 없으면 answer에 push
    //이것도 더 효율적인게 있을텐데? 왜냐하면 includes도 반복문이랑 비슷하다고 알고 있어서..
    let answer = [];
    arr.forEach(val => {
        delete_list.includes(val) ? 0 : answer.push(val);
    })
    return answer;
}