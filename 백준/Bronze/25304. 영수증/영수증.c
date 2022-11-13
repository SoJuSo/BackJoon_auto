#include <stdio.h>

int main()
{
    int total_price = 0;
    int count_price = 0;
    int cnt = 0;
    int price = 0, num = 0;

    scanf("%d", &total_price);
    scanf("%d", &cnt);

    for (int i = 0; i < cnt; i++)
    {
        scanf("%d %d", &price, &num);
        count_price = count_price + (price * num);
    }
    if (count_price == total_price)
    {
        printf("Yes");
    }
    else
    {
        printf("No");
    }

    return 0;
}