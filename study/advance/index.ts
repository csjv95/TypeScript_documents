{
  // obj 값 접근하기
  const obj = {
    name: "jin",
  };

  // name의 키값을 받아오는 방법
  obj.name;
  obj["name"];

  // 위처럼 type도 인덱스를 기반으로 가져올 수 있다

  type Animal = {
    name: string;
    species: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name의 타입은 String
  const chat: Name = "Hello"; // string 타입만 가능

  type Gender = Animal["gender"]; // Gender의 타입은 male || female
  const choose: Gender = "male"; // male || female만 가능

  type Key = keyof Animal; // Key의 타입은 name|| species || age || gender
  const key: Key = "age"; // name|| species || age || gender 만 가능

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "SJ",
    gender: "male",
  };
}
