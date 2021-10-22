{
  //Array
  const lastNames: string[] = ["Choi", "Kim", "Jung", "park"]; // 이 방식이 readonly를 사용 할 떄만 사용할 수 있어서 문맥 통일을 위해 더 많이 쓰임
  const scores: Array<number> = [0, 1, 2, 3];
  const printArray = (lastNames: readonly string[]) => {};

  // Tuple 사용할떄 신중해야함 interface, type alias, class로 대체가능
  let car: [string, number];
  car = ["sonata", 45];
  // 배열의 인덱스 번호로 접근가능 하지만 가독성 문제가 있고
  car[0]; // type
  car[1]; // 45
  const [type, carNum] = car;
}
