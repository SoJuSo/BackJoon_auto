#include <stdio.h>
#include <stdlib.h>

int main()
{
    int size = 0;
    int num = 0;
    int check_num = 0;
    int cnt = 0;

    scanf("%d", &size);

    int *arr = (int *)malloc(sizeof(int) * size);

    for (int i = 0; i < size; i++)
    {
        scanf("%d", &num);
        arr[i] = num;
    }

    scanf("%d", &check_num);

    for (int i = 0; i < size; i++)
    {
        if (check_num == arr[i])
        {
            cnt++;
        }
    }

    printf("%d", cnt);
    free(arr);

    return 0;
}
