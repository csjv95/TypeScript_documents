# Union (OR)

발생할 수 있는 모든 케이스중에 한가지만 선택

```
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };
```

## Discriminated Union

어떤 케이스든 같은 프로퍼티를 작성하여 이용해서 공통적으로 쉽게 접근할 수 있게 만들어 준다

```
  type isLogin = boolean;

  type successState = {
    result: true;
    resopon: {
      body: string;
    };
  };

  type failState = {
    result: false;
    resopon: {
      error: string;
    };
  };

  type LoginState = successState | failState;

  const login = (): LoginState => {
    return {
      result: true,
      resopon: {
        body: "login",
      },
    };
  };
  const printLoginState = (state: LoginState) => {
    return state.result
      ? console.log(state.resopon.body)
      : console.log(state.resopon.error);
  };

  printLoginState(login());

```
