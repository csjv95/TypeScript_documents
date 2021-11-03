{
  // map 활용
  // [1, 2].map((item) => item); // 1,2

  type People = {
    name: string;
    age: number;
  };

  type Animal = {
    species: string;
    age: number;
  };

  // T타입에 있는 모든 key들을 순환하면서 순차적으로 P에 할당합니다
  // ? 옵션을 사용할 수 있습니다
  // P의 값의 타입을 맵핑해서 만들 수 있습니다
  type Option<T> = {
    [P in keyof T]?: T[P]; // for .. in 과 비슷
  };

  // 방법 1 등록해서 쓰기
  type AnimalOption = Option<Animal>;

  // 방법 2 사용할떄 쓰기
  const animal: Option<Animal> = {
    species: "dog",
    age: 5,
  };
  animal.age; // 5

  // readonly 읽기 전용만
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const person: Readonly<People> = {
    name: "hello",
    age: 2,
  };

  // union(or) 타입도 사용가능
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const dog: Nullable<Animal> = {
    species: "dog",
    age: null, //number | null
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxyfy<T> = {
    [P in keyof T]: Proxy<T[P]>; // 타입을 Proxy라는걸로 한단계 더 감싸준다
  };
}
