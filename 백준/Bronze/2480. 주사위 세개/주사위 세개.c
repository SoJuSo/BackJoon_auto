#include <stdio.h>

int main()
{

    int A = 0, B = 0, C = 0;
    int reward = 0;
    int max = 0;

    scanf("%d %d %d", &A, &B, &C);

    if (A == B && B == C && A == C)
    {
        reward = 10000 + (A * 1000);
    }
    else if (A != B && B != C && A != C)
    {
        if (max < A)
        {
            max = A;
        }
        if (max < B)
        {
            max = B;
        }
        if (max < C)
        {
            max = C;
        }
        reward = max * 100;
    }
    else
    {
        if (A == B)
        {
            max = A;
        }
        else if (A == C)
        {
            max = A;
        }
        else
        {
            max = B;
        }
        reward = 1000 + (max * 100);
    }

    printf("%d", reward);

    return 0;
}