function solution(order) {
    //아이디어 순회하면서 간단하게 비교해서 answer에 ++
    let answer = 0;
    order.forEach(val => {
        val.includes('ameri') ? answer += 4500 : 0;
        val.includes('anyth') ? answer += 4500 : 0;
        val.includes('latte') ? answer += 5000 : 0;
    })
    return answer;
}