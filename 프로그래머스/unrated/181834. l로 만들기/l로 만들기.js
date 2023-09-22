function solution(myString) {
    //아이디어
    //charCodeAt()으로 k의 아스키코드 알아줄까 했는데
    //이거 그냥 replaceAll() 쓰면 끝나는거 아님?
    //하긴 했는데...뭔가 맘에 안들어...
    myString = myString.replaceAll("a", "l");
    myString = myString.replaceAll("b", "l");
    myString = myString.replaceAll("c", "l");
    myString = myString.replaceAll("d", "l");
    myString = myString.replaceAll("e", "l");
    myString = myString.replaceAll("f", "l");
    myString = myString.replaceAll("g", "l");
    myString = myString.replaceAll("h", "l");
    myString = myString.replaceAll("i", "l");
    myString = myString.replaceAll("j", "l");
    myString = myString.replaceAll("k", "l");
    return myString;
}