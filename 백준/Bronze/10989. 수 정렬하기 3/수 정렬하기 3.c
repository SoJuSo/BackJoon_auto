#include<stdio.h>

int main(){
	int N;
	int num;
	
	int count[10001]={0,};
	scanf("%d", &N);
	
	for(int i=0; i<N ;i++){
		scanf("%d", &num);
		count[num] = count[num] + 1; //숫자 카운트  
	}
	
	for(int i=1; i<10001; i++){
		for(int j=1; j<=count[i]; j++){ //숫자만큼 반복 출력 
			printf("%d\n", i);
		}
	}
	return 0;
}