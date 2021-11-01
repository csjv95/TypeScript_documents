{
  // stack을 제네릭타입으로 바꿔보기

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      // undifined 넣으면 JS에서 자동적으로 undifined를 넣을수 있음 그래서 == 비교로 null 확인하기
      if (this.head == null) {
        throw new Error("Check the your stack");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>();

  stack.push("hello");
  stack.push("con");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }

  const stack3 = new StackImpl<object>();
  const obj = {
    name: "SJ",
    age: 26,
  };

  stack3.push(obj);

  while (stack3.size !== 0) {
    console.log(stack3.pop());
  }
}
