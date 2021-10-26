{
  // Obstraction (추상화)
  // 메서드나 접근자가 무수히 많아서 무었을 쓸지 모를떄
  // 정보 은닉화를 통해 필요한것만 노출시켜서 사용자가 무었을 사용할수 있을지 예상가능하게 한다

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // or use Interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makemachine = (coffeeBeans: number): CoffeeMachine => {
      return new CoffeeMachine(coffeeBeans);
    };

    fillCoffeeBeans = (beans: number) => {
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

    makeCoffee = (shots: number): CoffeeCup => {
      this.grindBeans(shots);
      this.preHeat();

      return this.extract(shots);
    };
  }
  const maker: CoffeeMachine = CoffeeMachine.makemachine(20);
  maker.fillCoffeeBeans(20);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makemachine(20);
  // maker2.fillCoffeeBeans(20) // 인터페이스에 등록이 안되있어서 사용 x
  maker2.makeCoffee(2);
}
