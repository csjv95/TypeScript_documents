# inference (추론)

inference는 타입이 뭔지 명시하거나 값을 넣지 않아도 추론해서 적용 시켜준다

```
  let text = "hello";
  console.log(text); // 타입을 명시하지 않아도 받은값의 결과를 추론하여서 자동적으로 넣어준다

  const print = (message) => {
    console.log(message); // 타입을 명시하기전 값을 입력하기 전까지는 any로 등록되서 무슨 타입이든 가능해진다
  };

  // 타입추론을 사용하기보단 함수에서는 타입을 명확하게 적어주는 것이 좋음 void라면 제외가능 명확하게 return 값이 있으면 명시
  const add = (a: number, b: number) => {
    return a + b;
  };
  const result = add(1, 100);
  console.log(result); // 함수의 타입을 정해놓지 않아 매개변수로 number타입을 받으니깐 결과도 number로 추론한다
```
