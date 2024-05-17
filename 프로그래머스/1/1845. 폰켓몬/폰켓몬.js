function solution(nums) {
    // 포커스 << 숫자에 맞춰보자
    const max = nums.length / 2;
    const obj = {};
    
    nums.forEach((val) => {
        if(obj[val] === undefined){
            obj[val] = 1;
        }else{
            obj[val]++;
        }
    })
    
    const filtered = Object.keys(obj).length
    return filtered > max ? max : filtered
}