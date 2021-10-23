# Function

함수의 결정하기 위해 아래와 같이 두가지의 정보가 필요합니다

- 매개변수의 타입
- return 타입

```
// JavaScript 💩 타입이 없어 선호 x
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨ 타입을 정해주어서 알기쉽고 컴파일러 과정에서 즉시 오류를 알려준다
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter ? 전달하지않으면 undefined
  const printName = (firstName: string, lastName?: string): string => {
    return `welcome to TS world ${firstName} ${lastName}`;
  };

  console.log(printName("Choi", "seokjin"));
  console.log(printName("coner"));

  //Default parameter
  const printMessage = (message: string = `Can I get message?`): string => {
    return message;
  };

  console.log(printMessage());
  console.log(printMessage("Hello SJ"));

  // Rest parameter

  const addNums = (...num: number[]): number => {
    return num.reduce((a, b) => a + b);
  };

  console.log(addNums(1, 2, 3));
```
