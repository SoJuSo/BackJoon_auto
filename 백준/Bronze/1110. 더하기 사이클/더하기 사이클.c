#include <stdio.h>

int main()
{
    int N = 0, NE = 0, cnt = 0;
    scanf("%d", &N);
    NE = N;
    while (1)
    {
        N = (N / 10 + N % 10) % 10 + (N % 10) * 10;

        cnt++;
        if (N == NE)
        {
            printf("%d", cnt);
            break;
        }
    }

    return 0;
}