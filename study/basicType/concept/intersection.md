# Intersection (교차)

## 특징

- 교차 타입은 유니언 타입과 밀접한 관련이 있지만 사용 방법은 매우 다릅니다.
- 교차 타입은 여러 타입을 하나로 결합합니다.
- 기존 타입을 합쳐 필요한 기능을 모두 가진 단일 타입을 얻을 수 있습니다.

## 사용법

```
  // interscetion Type : &

  type Student = {
    name: string;
    score: number;
  };

  type Woker = {
    empolyeeId: number;
    work: () => void;
  };

  const intern = (person: Student & Woker) => {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  };
```
