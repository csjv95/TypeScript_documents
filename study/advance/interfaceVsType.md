# Interface vs type

TS 초창기때에는 interface를 사용하는걸 권장했습니다. 하지만 TS가 버전업을 통해서 점점 type aliases에 강력한 기능들이 추가되었습니다

## concept(개념적인 측면)

### Type

어떠한 것을 구현하는게 목적이아닌 데이터를 담을 목적이면 type을 사용하는 것을 권장되고 있습니다

### Interface

인터페이스는 어떤것의 규격 상황입니다. 오브젝트와 오브젝트간에 의사소통을 할떄 정해진
인터페이스를 토대로 서로간의 상호작용을할 수 있도록 도와주며 서로간의 약속 계약서와 동일합니다. 어떤 특정한 규격을 정의하거나 규격을 통해 어떤것이 구현된다면 Interface를 사용하는걸 권장하고 있습니다.

## Tech(기술적인 측면)

### 공통적인 부분

```
type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // 둘다 객체로 만들수 있음
  const obj1: PositionType = {
    x: 100,
    y: 100,
  };

  const obj2: PositionInterface = {
    x: 100,
    y: 100,
    z: "hello",
  };

  // 둘다 클래스에서도 구현 가능
  class Postion1 implements PositionType {
    x: number;
    y: number;
  }

  class Postion2 implements PositionInterface {
    x: number;
    y: number;
    z: "hello";
  }

  // 둘다 확장가능
  type ExPositionType = PositionType & { z: string };

  interface ExPositionInterface extends PositionInterface {
    z: string;
  }
```

### Interface만 있는기능

```
  // 중복 사용
  interface PositionInterface {
    z: string;
  }

  type PositionType = {}; //'PositionType' 식별자가 중복되었습니다
```

### type만 있는기능

```
 // type aliases만 가능
  type Person = {
    name: string;
    age: number;
  };

  // 키의 타입을 참조가능
  type Name = Person["name"];

  // 새로운 타입을 만들수 있다
  type num = number;

  // 유니언 타입
  type Direction = "left" | "right";
```
