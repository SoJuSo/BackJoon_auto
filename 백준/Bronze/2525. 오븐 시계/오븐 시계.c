#include <stdio.h>

int main()
{
    int hour = 0;
    int min = 0;
    int dur_time = 0;

    scanf("%d %d", &hour, &min);
    scanf("%d", &dur_time);

    min = min + dur_time;
    if (min >= 60)
    {
        hour = hour + (min / 60);
        min = min % 60;

        if (hour >= 24)
        {
            hour = hour - 24;
        }
    }

    printf("%d %d", hour, min);

    return 0;
}