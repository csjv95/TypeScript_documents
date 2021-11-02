{
  // interface vs type
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
  type ExPositionType = PositionType & { y: string };

  interface ExPositionInterface extends PositionInterface {
    z: string;
  }

  // interface만 가능 *중복 사용
  interface PositionInterface {
    z: string;
  }

  type PositionType = {}; //'PositionType' 식별자가 중복되었습니다

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
}
