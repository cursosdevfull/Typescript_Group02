function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Lucía";

  constructor() {
    console.log("Hola, soy", this.name);
  }
}

const person = new Person();
