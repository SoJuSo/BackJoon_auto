#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int num1, int num2) {
    double answer = (double)num1/num2*1000;
    return (int)answer;
}