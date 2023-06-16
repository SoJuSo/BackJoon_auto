#include <stdio.h>

int main()
{
    int num = 0;
    scanf("%d", &num);
    for(int i = 0; i < num / 4; i++){
        printf("long ");
    }
    printf("int");
    return 0;
}
