{
  // inheritance

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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

  // CoffeeMachine 을 상속 받는다 extends
  class Latte extends CoffeeMachine {
    // serialNumer 추가
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    // 우유를 데우는 추가 함수
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

  const coffee = new CoffeeMachine(20);
  const latte = new Latte(20, "latte1");
  const makeLatte = latte.makeCoffee(2);

  console.log(makeLatte);
  console.log(latte.serialNumber);
}
