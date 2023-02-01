#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int total_cnt_num = 0;
    int inner_cnt_num = 0;
    scanf("%d", &total_cnt_num);

    for (int i = 0; i < total_cnt_num; i++)
    {
        float sum = 0;
        float cnt = 0;
        scanf("%d", &inner_cnt_num);
        int arr[inner_cnt_num];
        for (int j = 0; j < inner_cnt_num; j++)
        {
            scanf("%d", &arr[j]);
            sum += arr[j];
        }

        sum = (sum / (float)(inner_cnt_num));
        for (int h = 0; h < inner_cnt_num; h++)
        {
            if (arr[h] > sum)
            {
                cnt += 1;
            }
        }
        printf("%.3lf%%\n", (float)((cnt / inner_cnt_num) * 100));
    }

    return 0;
}