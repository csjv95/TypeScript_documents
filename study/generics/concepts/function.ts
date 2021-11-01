{
  // generic 함수

  const checkNull = (arg: number | null): number => {
    if (arg === null) {
      throw new Error("not vaild number");
    }
    return arg;
  };

  const result = checkNull(1);
  console.log(result);
  checkNull(null);

  const checkNotNull = <GENERIC>(arg: GENERIC | null): GENERIC => {
    if (arg === null) {
      throw new Error("not vaild number");
    }
    return arg;
  };
}
