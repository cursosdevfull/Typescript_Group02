class RobotClasico {
  makeAmericaCoffee() {
    console.log("Haciendo café americano");
  }
}

//const robotClasico = new RobotClásico();
class RobotModerno extends RobotClasico {
  makeCoffee() {
    console.log("Haciendo café");
  }
}

const robotClasico = new RobotClasico();
robotClasico.makeAmericaCoffee();

const robotModerno = new RobotModerno();
robotModerno.makeAmericaCoffee();
robotModerno.makeCoffee();
