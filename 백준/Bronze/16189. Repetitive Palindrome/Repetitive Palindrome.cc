#include<iostream>
#include<cstdio>
#include<vector>
#include<algorithm>
#include<string.h>
using namespace std;

char str[250005];
long long n;

bool find()
{
	int len = strlen(str);
	for (int i = 0; i < len/2; i++)
	{
		if (str[i] != str[len - i-1])
			return false;
	}
	return true;
}

int main()
{
	scanf("%s%lld", str, &n);
	if (find())
		printf("YES");
	else
		printf("NO");
	return 0;
}