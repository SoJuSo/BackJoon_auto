function solution(name, yearning, photo) {
    let answer = [];
    //아이디어
// 우선 객체에 넣어서 객체의 값으로 비교하면 더 쉬울거같다
// name의 길이와 yearning의 길이 같음을 생각
    let obj = {};
    
    for(let i = 0; i < name.length; i++){
        if(obj[i] === undefined){
            obj[name[i]] = yearning[i];
        }
    }
    //객체로 하는 방법은 생각안나서 배열로 변환 후 진행
    let obj_arr = Object.entries(obj);
    photo.forEach((i) => {
        let cnt = 0;
        i.forEach((l) => {
            obj_arr.map(temp => {
                if(temp[0] === l){
                    // console.log(l)
                    cnt += temp[1];
                }
            })
            // Object.keys(obj).map(temp => {
            //     if(temp == l){
            //         console.log('hello')
            //         console.log(l)
            //         console.log(Object.keys(obj))
            //     }
            // })
            // console.log(l)
            // console.log(Object.keys(obj))
        })
        // console.log(cnt)
        answer.push(cnt)
    })
    
    console.log(obj_arr)
    return answer;
}