#include <iostream>
#include <vector>
using namespace std;

bool solve(void) {
  int n, m; 
  cin >> n >> m; // n과 m을 입력받음
  
  vector<int> a(n), b(m); // 크기가 n인 벡터 a와 크기가 m인 벡터 b를 생성
  for (int i = 0; i < n; i++) 
    cin >> a[i]; // 벡터 a의 요소를 입력받음
  
  for (int j = 0; j < m; j++) 
    cin >> b[j]; // 벡터 b의 요소를 입력받음

  return n <= m; // n이 m보다 작거나 같으면 true 반환, 그렇지 않으면 false 반환
}

int main(void) {
  ios::sync_with_stdio(false); // C++ 표준 입출력의 동기화를 비활성화하여 입출력 속도를 향상시킴
  cin.tie(nullptr); // cin과 cout의 묶음을 해제하여 입출력 성능을 최적화함

  int t; 
  cin >> t; // 테스트 케이스의 수를 입력받음
  while (t--) 
    cout << (solve() ? "Yes" : "No") << "\n"; // solve() 함수의 반환값에 따라 "Yes" 또는 "No"를 출력
  
  return 0;
}
