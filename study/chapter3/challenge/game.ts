{
  // make a game 🕹

  type Action = "up" | "down" | "left" | "right";

  const position = { x: 0, y: 0 };
  const move = (action: Action) => {
    switch (action) {
      case "up":
        position.x += 1;
        break;
      case "down":
        position.x -= 1;
        break;
      case "left":
        position.y -= 1;
        break;
      case "right":
        position.y += 1;
        break;
      default:
        throw new Error(
          `Sorry.. you can choose one "up","down","left","right"`
        );
    }
  };

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
