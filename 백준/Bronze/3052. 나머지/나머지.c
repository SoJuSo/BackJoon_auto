#include <stdio.h>

int main()
{
    int input_Arr[10] = {0};

    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &input_Arr[i]);
    }

    int result_Arr[10] = {0};
    for (int i = 0; i < 10; i++)
    {
        result_Arr[i] = input_Arr[i] % 42;
    }

    // for (int i = 0; i < 10; i++)
    // {
    //     printf("%d ", input_Arr[i]);
    // }

    for (int i = 0; i < 10; i++)
    {
        for (int j = i + 1; j < 10; j++)
        {
            if (result_Arr[i] == result_Arr[j])
            {
                result_Arr[j] = -1;
            }
        }
    }

    int cnt = 0;
    for (int i = 0; i < 10; i++)
    {
        if (result_Arr[i] != -1)
        {
            cnt++;
        }
    }
    printf("%d", cnt);

    return 0;
}