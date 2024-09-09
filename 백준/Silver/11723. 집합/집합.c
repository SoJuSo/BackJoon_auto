#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>

int set[21];
  
int main() {
	int M, i, j;
	scanf("%d", &M);
	while (M) {
		char command[7];
		int num;
		scanf("%s", &command);
		if (!strcmp(command, "add")) {
			scanf("%d", &num);
			set[num] = 1;
		}
		else if (!strcmp(command, "remove")) {
			scanf("%d", &num);
			set[num] = 0;
		}
		else if (!strcmp(command, "check")) {
			scanf("%d", &num);
			if (set[num])
				printf("1\n");
			else
				printf("0\n");
		}
		else if (!strcmp(command, "toggle")) {
			scanf("%d", &num);
			if (set[num])
				set[num] = 0;
			else
				set[num] = 1;
		}
		else if (!strcmp(command, "all")) {
			for (i = 1; i <= 20; i++)
				set[i] = 1;
		}
		else if (!strcmp(command, "empty")) {
			for (i = 1; i <= 20; i++)
				set[i] = 0;
		}
		M--;
	}
	return 0;
}