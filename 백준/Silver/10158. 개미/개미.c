#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
	long long T;
	int W, H, P, Q, dx, dy;

	scanf("%d %d %d %d %lld", &W, &H, &P, &Q, &T);

    dx = (P + T) % (2 * W);
    dy = (Q + T) % (2 * H);

    if (dx > W) {
      dx = 2 * W - dx;
    }

    if (dy > H) {
      dy = 2 * H - dy;
    }

	printf("%d %d", dx, dy);

}