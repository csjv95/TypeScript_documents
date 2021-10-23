{
  // Assertion은 추천하지만 JS필요에 의해서 사용해야할 수 있습니다

  //any타입의 함수
  const helloStr = (): any => {
    return "hello";
  };
  const resultStr = helloStr();

  console.log(resultStr.length); // any 타입이기떄문에 추천코드에서 length가 잡히지는 않는다
  console.log((resultStr as string).length); // 100% 확신이 있을때만 캐스팅해준다
  console.log((<string>resultStr).length); // as와 같은 방법

  const helloNum = (): any => {
    return 2;
  };
  const resultNum = helloNum();
  console.log(resultNum.length); // 숫자이기떄문에 undefined를 반환
  console.log((resultNum as string).length); // undefined를 반환 이렇기 때문에 100% 확신이 있을때만 캐스팅해준다

  // ! 예제 !를쓰면 확신이있을떄 에러나 경고를 무시하고 작성할 수 있다
  const getNum = (): number[] | undefined => {
    return undefined;
  };
  const num = getNum!(); // 함수를 호출하고 작성해도 되고
  num!.push(1); //변수뒤에 작성가능
  console.log(num); // 숫자 배열이 아니라 getNum에선 undefined를 리턴하기 떄문에 .push를 사용하지 못합니다
}
