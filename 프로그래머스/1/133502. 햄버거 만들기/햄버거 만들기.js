function solution(ingredient) {
    let answer = 0;
    let stack = []; // 재료 쌓아두는 stack
    ingredient.forEach(i => {
        stack.push(i); // 일단 재료를 쌓는다
        // 재료가 4개 이상 쌓일 때
        if (stack.length >= 4) {
            // 마지막에 4개까지 재료가 햄버거 순서면 포장
            if ('1231' === stack.slice(-4).join('')) {
                answer += 1;
                // stack.splice(-4);
                stack = stack.slice(0, -4);
            }
        }
    })


    return answer;
}