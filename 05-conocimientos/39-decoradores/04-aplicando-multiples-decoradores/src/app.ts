function Component(config: { selector: string; template: string }) {
  return function (constructor: new (...args: any[]) => any) {
    console.log("Rendering component...");
    console.log("selector", config.selector);
    const el = document.querySelector(config.selector);
    console.log("el", el);
    const instance = new constructor();
    if (el) {
      el.innerHTML = config.template;
      el.querySelector("h1")!.textContent = instance.name;
    }
  };
}

function NewLogger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Component({
  selector: "#app",
  template: "<h1>Hola Mundo</h1>",
})
@NewLogger("Logging - Person")
class Person {
  name = "Javier Heraud";

  constructor() {
    console.log("Hola, soy", this.name);
  }
}
