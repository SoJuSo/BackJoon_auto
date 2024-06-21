# [Bronze II] Rect - 9849 

[문제 링크](https://www.acmicpc.net/problem/9849) 

### 성능 요약

메모리: 9348 KB, 시간: 100 ms

### 분류

기하학, 수학

### 제출 일자

2024년 6월 21일 19:52:13

### 문제 설명

<p>Given a set of rectangles {R<sub>1</sub>, R<sub>2</sub>, · · · , R<sub>n</sub>}, compute the area of their common intersection. i.e.,</p>

<p style="text-align: center;">Area (R<sub>1</sub> ∩ R<sub>2</sub> ∩ · · · ∩ R<sub>n</sub>)</p>

<p>The edges of the rectangles R<sub>1</sub>, R<sub>2</sub>, · · · , R<sub>n</sub>, are either vertical or horizontal lines.</p>

<p>For example, the intersection of 4 rectangles, R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub>, and R<sub>4</sub>, in the following figure is the shaded rectangle.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/264f8ab3-4e5c-4231-807d-2cf10b88a497/-/preview/" style="width: 268px; height: 211px;"></p>

### 입력 

 <p>T.IN The first line specifies the number of rectangles n, where 1 < n < 1,000. Since the sides of the rectangles are parallel to the x and y axes, each rectangle is bounded by the lines x = x<sub>1</sub>, x = x<sub>2</sub>, y = y<sub>1</sub> and y = y<sub>2</sub> and each subsequent line of the input thus specifies one rectangle in the following format:</p>

<pre>x<sub>1</sub> x<sub>2</sub> y<sub>1</sub> y<sub>2</sub></pre>

<p>such that 0 ≤ x<sub>1</sub> < x<sub>2</sub> ≤ 10,000 and 0 ≤ y<sub>1</sub> < y<sub>2</sub> ≤ 10,000, and x<sub>1</sub>, x<sub>2</sub>, y<sub>1</sub> and y<sub>2</sub> are int</p>

### 출력 

 <p>The output contains the area of the intersection of all the rectangles.</p>

