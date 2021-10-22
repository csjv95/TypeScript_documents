{
  type Text = string;
  const name: Text = "SJ";
  console.log(name);
  type num = number;

  const callNums = (...nums: num[]) => {
    return nums.forEach((n) => console.log(n));
  };
  callNums(1, 2, 3);

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "SJ",
    age: 26,
  };

  // String literal types
  type Name = "SJ";
  let SjName: Name;
  // SjName = "Hello" x
  SjName = "SJ";
}
