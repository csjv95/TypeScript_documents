# Array

배열 타입은 자바스크립트 Array 값의 타입을 나타내는데 쓰인다. 원소 타입 뒤에 대괄호([])를 붙여 표현한다

## TS Array 작성 방법

```
  const lastNames: string[] = ["Choi", "Kim", "Jung", "park"]; // 이 방식이 readonly를 사용 할 떄만 사용할 수 있어서 문맥 통일을 위해 더 많이 쓰임

  const scores: Array<number> = [0, 1, 2, 3];
  const printArray = (lastNames: readonly string[]) => {};
```

## Tuple (사용할떄 신중해야함 interface, type alias, class로 대체가능)

Tuple 타입을 이용하여 각 원소의 수와 타입이 정확히 지정된 배열의 타입을 지정할 수 있습니다

```
  let car: [string, number];
  car = ["sonata", 45];
  car[0]; // sonata
  car[1]; // 45
  const [type, carNum] = car;

```

### Tuple 주의점

- 튜플 타입의 값을 Array 프로토타입의 메소드를 통해 조작하는 것은 금지되지 않는다는 점에 유의해야 한다.
- 배열의 인덱스 번호로 접근가능 하지만 가독성 문제가 있습니다
