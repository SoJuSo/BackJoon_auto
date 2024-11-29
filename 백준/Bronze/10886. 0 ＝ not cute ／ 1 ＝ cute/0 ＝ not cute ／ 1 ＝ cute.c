#include <stdio.h>
 
int main() {
 
    int n, a;
    int zero = 0, one = 0;
 
    scanf("%d", &n);
 
 
    for (int i = 0; i < n; i++) {
        scanf("%d", &a);
        if (a == 1)
            one++;
        else if (a == 0)
            zero++;
 
 
    }
    if (one > zero)printf("Junhee is cute!");
    else printf("Junhee is not cute!");
 
}