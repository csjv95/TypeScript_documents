{
  // use getter and setter

  // not yet use the getter and setter
  // class User {
  //   firstname: string;
  //   lastName: string;
  //   fullName: string;

  //   constructor(firstName: string, lastName: string) {
  //     this.firstname = firstName;
  //     this.lastName = lastName;
  //     this.fullName = `${firstName} ${lastName}`;
  //   }
  // }

  // const user = new User("seokjin", "Choe");
  // console.log(user.fullName);

  // use getter and setter

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    get old(): number {
      return this.age;
    }

    set old(num: number) {
      if (num < 0) {
        throw new Error("plz How old are you? ^^");
      }
      this.age = num;
    }

    constructor(
      private firstName: string,
      private lastName: string,
      private age: number
    ) {}
  }

  const user = new User("SJ", "Choi", 26);

  console.log(user);
  user.old = 6;
  console.log(user);
}
