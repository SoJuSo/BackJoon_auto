function solution(myString) {
    //아이디어
    //알파벳의 길이가 짧지 않으므로 배열로 전환해서 처리
    //a일 경우에는 대문자 A로
    const arr = myString.split('');
    arr.forEach((val, index) => {
        if(arr[index] == 'a'){
            arr[index] = 'A';
        }else if(arr[index] == 'A'){
            //아무것도 안함
        }else{
            arr[index] = arr[index].toLowerCase();
        }
    })
    return arr.join('');
}