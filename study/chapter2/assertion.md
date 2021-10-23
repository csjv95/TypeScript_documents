# Assertion (표명)

타입 표명인 (Assertion)은 TS가 추론 및 분석한 타입을 개발자가 원하는대로 얼마든지 바꿀수 있습니다 단 이것은 권장 하지 않으며 JS필요에 의해서 사용해야할 수 있습니다 완전한 100%확신이 있을경우 컴파일러에게 "이게 확실해!"라고 하는것 입니다

```
  //any타입의 함수
  const helloStr = (): any => {
    return "hello";
  };
  const resultStr = helloStr();

  console.log(resultStr.length); // any 타입이기떄문에 추천코드에서 length가 잡히지는 않는다
  console.log((resultStr as string).length);  // 100% 확신이 있을때만 캐스팅해준다
  console.log((<string>resultStr).length);  // as와 같은 방법

  // return 값이 숫자일떄
  const helloNum = (): any => {
    return 2;
  };

  const resultNum = helloNum();

  console.log(resultNum.length); // 숫자이기떄문에 undefined를 반환
  console.log((resultNum as string).length); // undefined를 반환 이렇기 때문에 100% 확신이 있을때만

  // ! 예제 !를쓰면 확신이있을떄 에러나 경고를 무시하고 작성할 수 있다
  const getNum = (): number[] | undefined => {
    return undefined;
  };
  const num = getNum!(); // 함수를 호출하고 작성해도 되고
  num!.push(1); //변수뒤에 작성가능
  console.log(num); // 숫자 배열이 아니라 getNum에선 undefined를 리턴하기 떄문에 .push를 사용하지 못합니다
```
