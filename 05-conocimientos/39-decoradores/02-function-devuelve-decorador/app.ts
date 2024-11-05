function NewLogger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@NewLogger("Logging - Person")
class Person {
  name = "Lucía";

  constructor() {
    console.log("Hola, soy", this.name);
  }
}

const person = new Person();
