# Generics

Generics는 객체지향 프로그래밍에서 사용하는 기법입니다.  
TS에서도 사용할 수 있는데
메스드의 매개변수의 구체적인 타입을 규정하지 않고 사용자가 타입을 규정하게해서 함수,인터페이스,클래스의 재사용을 높일수 있습니다.

> 이넘(enum)과 네임스페이스(namespace)는 제네릭으로 생성할 수 없습니다.

## any 타입의 문제점

TS에서 타입을 정해주지 않으면 any 타입으로 결정됩니다 또는 any 타입으로 결정해주면 타입이 어떤것이든지 들어 올수 있습니다 하지만 이것은 아래와 같은 문제점이 있습니다

- 반환타입을 유추하기 어렵다
- 매개변수의 프로퍼티를 체크하지 않는다

## Generics 사용법

### 함수

```
// fucntion
function logText<T>(text: T): T {
  return text;
}

// arrow fucntion
const logText = <T> (text :T): T => {
  return text;
}

// 호출 방법
const text = Text<string>("Hello Generic");

const text:number = logNumber(1);

const text = boolen(ture);
```

### 클래스

```
interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }
  const either = new SimpleEither(4, 5);
  either.left();
  const either2 = new SimpleEither({ name: "SJ" }, 5);
  console.log(either2.left());
```
