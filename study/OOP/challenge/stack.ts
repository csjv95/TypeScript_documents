{
  // // 배열 이용해서
  // interface Arr {
  //   arr: string[];
  // }

  // interface Push {
  //   (value: string): number;
  // }

  // const arr: string[] = [];

  // const push: Push = (text: string) => {
  //   return arr.push(text);
  // };

  // const pop = (): void => {
  //   arr.pop();
  // };

  // push("hello");
  // push("SJ");
  // console.log(arr);
  // pop();
  // console.log(arr);

  // stack 구현하기 배열 사용하지 않고

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
      return this._size;
    }

    push(value: string) {
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
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
  const stack = new StackImpl();

  stack.push("hello");
  stack.push("con");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
