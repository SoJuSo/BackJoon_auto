#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int size = 0;
    int cnt = 0;
    size = n/2+1;
    
    int* answer = (int*)malloc(sizeof(int)*size);
    
    for(int i = 1; i<=n; i=i+2){
        answer[cnt] = i;
        cnt++;
    }
    return answer;
}