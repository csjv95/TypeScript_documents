{
  // Coffee machine encapsulation

  // public default value 공개적으로 접근가능
  // private 외부에서 볼수 없고 접근 불가능
  // protected 외부에서는 접근할 수없지만 이것을 상속한 자식클래스에서만 접근 가능
  // 클래스를 만들떄 외부에서 접근할 수 있는것이 무었인지 내부적으로만 가지고 있을 데이터는 무었인지를 잘 생각하여 캡슐화를 해야됨
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makemachine = (coffeeBeans: number): CoffeeMaker => {
      return new CoffeeMaker(coffeeBeans);
    };

    fillCoffeeBeans = (beans: number) => {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      return (this.coffeeBeans += beans);
    };

    makeCoffe = (shots: number): CoffeeCup => {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    };
  }
  const maker = CoffeeMaker.makemachine(20);
}
