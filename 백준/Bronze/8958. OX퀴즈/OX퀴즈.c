#include <stdio.h>
#include <string.h>

int main()
{
    int input_num;
    char input_arr[80];

    scanf("%d", &input_num);
    int cnt = 1;
    int sum = 0;

    for (int i = 0; i < input_num; i++)
    {
        scanf("%s", &input_arr);
        for (int j = 0; j < strlen(input_arr); j++)
        {
            if (input_arr[j] == 'O')
            {
                sum += cnt;
                cnt++;
                // printf("%d ", sum);
            }
            if (input_arr[j] == 'X')
            {
                cnt = 1;
            }
        }
        printf("%d\n", sum);

        cnt = 1;
        sum = 0;
    }

    // printf("%d", strlen(arr));

    return 0;
}