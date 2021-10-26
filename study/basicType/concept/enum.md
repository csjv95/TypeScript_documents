# Enum

Enum JS에는 없음 여러가지의 관련되 상수값들을 한 곳에 모아 정리할수있게 하는 타입

## 사용법

- JS 에서 enum처럼 쓸려면

```
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  console.log(dayOfToday);
```

- TS enum

```
  enum Days {
    Monday = 0,
    Tuesday,
    Wednsday,
  }

  // 이렇게 값을 바꿀수 있어서 잘 쓰이지 않음
  console.log(Days.Monday);
  let day: Days = Days.Wednsday;
  day = Days.Tuesday;
  console.log(day);

  // union 타입으로 대체 가능
  type Names = "SJ" | "Sara" | "Reem" | "Dunfy";
  let name: Names = "Reem";
  // name = "Johne" 불가능
```
