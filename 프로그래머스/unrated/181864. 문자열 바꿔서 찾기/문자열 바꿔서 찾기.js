function solution(myString, pat) {
    //아이디어
    //A와 B로만 이루어졌으니
    //A일 경우에는 B로
    //아니면 A로
    const arr = myString.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'A'){
            arr[i] = 'B';
        }else{
            arr[i] = 'A';
         }
    }
    return arr.join('').includes(pat) ? 1 : 0;
}