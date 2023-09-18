function solution(a, b) {
    //아이디어
    //String으로 바꿔서 더해주고 다시 Number으로 바꿔줘서 비교
    return Number(String(b) + String(a)) > Number(String(a) + String(b)) ? Number(String(b) + String(a)) : Number(String(a) + String(b));
}