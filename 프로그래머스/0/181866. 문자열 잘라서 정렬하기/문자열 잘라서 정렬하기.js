function solution(myString) {
    return myString.split('x').filter(v => v.length).sort()
}