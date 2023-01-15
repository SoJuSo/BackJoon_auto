#include <stdio.h>

int main()
{
    int cnt = 28;
    // 입력문 배열
    int arr[28] = {0};

    // 비교값 배열
    int arr_comp[30] = {0};

    // 비교값 배열에 숫자 할당
    for (int i = 1; i < 31; i++)
    {
        arr_comp[i - 1] = i;
    }

    // 28개의 입력값 입력
    for (int i = 0; i < cnt; i++)
    {
        scanf("%d", &arr[i]);
    }

    // 입력값이 있는 배열은 비교배열에서 0으로 설정
    for (int i = 0; i < cnt; i++)
    {
        for (int j = 0; j < 30; j++)
        {
            if (arr[i] == arr_comp[j])
            {
                arr_comp[j] = 0;
            }
        }
    }

    int s_num1 = 0;
    int s_num2 = 0;

    for (int i = 0; i < 30; i++)
    {
        if (arr_comp[i] != 0)
        {
            if (s_num1 == 0)
            {
                s_num1 = arr_comp[i];
            }
            else
            {
                s_num2 = arr_comp[i];
            }
        }
    }

    if (s_num1 > s_num2)
    {
        printf("%d\n", s_num2);
        printf("%d\n", s_num1);
    }
    else
    {
        printf("%d\n", s_num1);
        printf("%d\n", s_num2);
    }

    return 0;
}