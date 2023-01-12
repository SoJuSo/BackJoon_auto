#include <stdio.h>

int main()
{

    int inputNum = 0;
    int maxNum = 0;
    int maxCnt = 0;

    for (int i = 0; i < 9; i++)
    {
        scanf("%d", &inputNum);
        // printf("%d\n", inputNum); //입력 확인
        if (inputNum > maxNum)
        {
            maxNum = inputNum;
            maxCnt = i + 1;
        }
    }

    printf("%d\n", maxNum);
    printf("%d", maxCnt);

    return 0;
}