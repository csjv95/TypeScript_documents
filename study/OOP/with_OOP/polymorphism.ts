{
  // polymorphism(다형성)

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makemachine = (coffeeBeans: number): CoffeeMachine => {
      return new CoffeeMachine(coffeeBeans);
    };

    clean() {
      console.log(`cleaning ...`);
    }

    fillCoffeeBeans = (beans: number): number => {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      return (this.coffeeBeans += beans);
    };

    private grindBeans = (shots: number) => {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    };

    private preHeat() {
      console.log(`Heating up...!`);
    }

    private extract = (shots: number): CoffeeCup => {
      console.log(`Pulling ${shots}....`);

      return {
        shots,
        hasMilk: false,
      };
    };

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    }
  }

  class LatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming ...");
    }

    makeCoffee(short: number): CoffeeCup {
      // 부모에 접근 super
      const coffee = super.makeCoffee(2);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  // 설탕커피 추가
  class SweetCoffeeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // 다형성의 장점
  // 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스들을 구현하거나
  // 또는 동일한 부모 클래스를 상속했을떄
  // 동일한 함수를 어떤 클래스인지 구별하지않고 공통된 apis를 호출할수 있습니다

  const machines = [
    new CoffeeMachine(20),
    new LatteMachine(20, "latte1"),
    new SweetCoffeeMachine(20),
  ];

  machines.map((machine) => {
    console.log("--------------------");
    machine.makeCoffee(2);
  });
}
