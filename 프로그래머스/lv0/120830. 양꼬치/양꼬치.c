#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {
    int answer = 0;
    
    answer = n * 12000 + k * 2000 - ((n/10) * 2000);
    
    return answer;
}