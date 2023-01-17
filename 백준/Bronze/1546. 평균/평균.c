#include <stdio.h>

int main()
{
    int num = 0;
    float sum = 0;
    float max = 0;

    scanf("%d", &num);

    // printf("%d", num);

    int arr[1000] = {0};

    for (int i = 0; i < num; i++)
    {
        scanf("%d", &arr[i]);
    }

    // for (int i = 0; i < num; i++)
    // {
    //     printf("%d", arr[i]);
    // }

    for (int i = 0; i < num; i++)
    {
        if (max < arr[i])
        {
            max = arr[i];
        }
        sum += arr[i];
    }

    float result = (float)(sum / num / max * 100);
    printf("%f", result);

    return 0;
}