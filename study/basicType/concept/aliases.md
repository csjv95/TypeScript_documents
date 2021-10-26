# Aliases (별칭)

직접 작성하는 하는 타입을 다른 이름으로 지정할 수 있습니다

## 특징

- 인터페이스와 비슷 합니다
- 주로 쓰는 경우 : Primitive, Union Type, Tuple. 여러번 쓸 때 사용되어 집니다
- 직접 작성하는 하는 타입을 다른 이름으로 지정할 수 있습니다
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것이 아니다.

## 사용법

```
  type Text = string;
  const name: Text = "SJ";
  console.log(name);
  type num = number;

  const callNums = (...nums: num[]) => {
    return nums.forEach((n) => console.log(n));
  };
  callNums(1, 2, 3);

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "SJ",
    age: 26,
  };

  // String literal types
  type Name = "SJ";
  let SjName: Name;
  // SjName = "Hello" x
  SjName = "SJ";

  // 원시타입 객체타입 literal도 모두 타입을 정해놓을수 있다
```
