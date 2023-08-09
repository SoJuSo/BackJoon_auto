function solution(s) {
    var answer = '';
    let res = [];
    s = s.split(' ').map(Number);
    res.push(Math.min.apply(null, s));
    res.push(' ')
    res.push(Math.max.apply(null, s));
    console.log(Math.min.apply(null, s));
    console.log(Math.max.apply(null, s));
    console.log(res.join(''))
    return res.join('');
}