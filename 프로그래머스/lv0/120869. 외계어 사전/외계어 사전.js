function solution(spell, dic) {
//공부 필요
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}