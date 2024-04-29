// Queue 직접구현 1회차
// 참조한 블로그 https://gyyeom.tistory.com/112
// 배열으로도 queue와 유사한 기능을 사용할 수 있지만 shift()연산자의 경우 배열의 `재정렬`으로 인한
// 추가연산이 요구되고 그에 따른 비효율이 발생한다. 따라서 JS에서도 정석 Queue 구현법을 알아야 한다.

// Queue의 기본원리
// 선입선출이다.
// 먼저 들어간 자료가 가장 먼저 나온다. FIFO

// JS에서의 Queue는 class 문법을 사용하여 구현한다.
// 여러 문법이 있지만, Node단위를 사용한 연결리스트 형태로 구현해보자.

// 노드를 선언해준다.
class Node {
  // 생성자를 통해 데이터와 next값을 초기화해준다.
  constructor(data) {
    // 현재 노드 데이터 값
    this.data = data;
    // 다음 노드를 가르키는 일종의 포인터 역할
    this.next = null;
  }
}

// 큐를 선언한다.
class Queue {
  constructor() {
    // 맨 앞 큐
    this.front = null;
    // 맨 뒤 큐
    this.last = null;
    // 큐의 전체 사이즈
    this.size = 0;
  }

  // 현재 queue의 사이즈에 따라 boolean값을 반환한다.
  isEmpty() {
    return this.size === 0;
  }

  // 새로운 데이터를 큐에 삽입한다.
  enqueue(data) {
    // 새로운 노드를 선언하고
    const newNode = new Node(data);
    // 만약 현재 큐가 비어있다면 새로 들어온 큐를 제일 앞쪽 큐로 배치한다.
    if (this.isEmpty()) {
      this.front = newNode;
      // 그렇지 않다면 현재 큐 마지막에 있는 노드 뒤로 새로운 큐를 삽입한다.
    } else {
      this.last.next = newNode;
    }
    // 큐의 마지막을 새로 삽입된 newNode로 바꿔준다.
    this.last = newNode;
    // 큐가 삽입되었으니 큐의 사이즈를 한단계 올려준다.
    this.size++;
  }

  dequeue() {
    // 빠른리턴, 큐가 비어있을 경우 dequeue할게 없다.
    if (this.isEmpty()) {
      return;
    }
    // front가 가리키는 노드의 데이터를 저장한다
    const data = this.front.data;
    // front를 다음 노드로 업데이트한다.
    this.front = this.front.next;
    // 큐의 크기를 1 감소시킨다.
    this.size--;
    // 삭제된 노드의 데이터를 반환한다.
    return data;
  }

  printQueue() {
    let current = this.front; // front부터 시작한다.
    let result = []; // 모든 노드의 데이터를 저장할 배열을 초기화한다.
    while (current !== null) {
      // 현재 노드가 null이 아닐 때까지 반복한다.
      result.push(current.data); // 현재 노드의 데이터를 결과 배열에 추가한다.
      current = current.next; // 다음 노드로 이동한다.
    }
    return result;
  }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(2);
q.enqueue(3);
q.enqueue(7);
q.dequeue();
q.enqueue(1);
q.enqueue(4);
q.dequeue();

console.log(q.printQueue().join(" "));
