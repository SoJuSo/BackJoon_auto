function solution(arr1, arr2) {
    //아이디어
    //간단하게 해보려고 했으나 몇가지 복잡한 조건이 있었다.
    //조건에 맞게 if문을 구성해줬다.
    if(arr2.length > arr1.length){
        return -1;
    }else if(arr1.length > arr2.length){
        return 1;
    }else{
        let arr1_sum = 0;
        let arr2_sum = 0;
        arr1.map((val) => {arr1_sum += val});
        arr2.map((val) => {arr2_sum += val});
        if(arr1_sum > arr2_sum){
            return 1;
        }else if(arr2_sum > arr1_sum){
            return -1
        }else{
            return 0;
        }
    }
}