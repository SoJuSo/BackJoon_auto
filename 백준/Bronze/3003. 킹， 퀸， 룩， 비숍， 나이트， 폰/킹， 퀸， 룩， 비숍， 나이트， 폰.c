#include <stdio.h>

int main()
{

    int A = 0, B = 0, C = 0, D = 0, E = 0, F = 0;

    scanf("%d %d %d %d %d %d", &A, &B, &C, &D, &E, &F);

    A = 1 - A;
    B = 1 - B;
    C = 2 - C;
    D = 2 - D;
    E = 2 - E;
    F = 8 - F;

    printf("%d %d %d %d %d %d", A, B, C, D, E, F);
    return 0;
}