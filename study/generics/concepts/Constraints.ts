{
  // Generics Constraints (제약)
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log("Full time");
    }
    workFullTime() {
      console.log("Work full");
    }
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log("Part Time");
    }
    workPartTime() {
      console.log("Work part");
    }
  }

  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // T extends employee
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const bob = new FullTimeEmployee();
  const john = new PartTimeEmployee();
  bob.workFullTime();

  const bobAfterPay = pay(bob);
  bobAfterPay.workFullTime();

  // extend keyof constraints
  const obj = {
    name: "SJ",
    age: 15,
  };

  function getValue<T, K extends keyof T>(o: T, k: K): T[K] {
    return o[k];
  }

  console.log(getValue(obj, "name"));
}
