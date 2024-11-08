function Component(config: { selector: string; template: string }) {
  return function (constructor: new (...args: any[]) => any) {
    const el = document.querySelector(config.selector);
    const instance = new constructor();
    if (el) {
      el.innerHTML = config.template;
      el.querySelector("h1")!.textContent = instance.name;
    }
  };
}

@Component({
  selector: "#app",
  template: "<h1>Hola Mundo</h1>",
})
class Person {
  name = "Javier Heraud";

  constructor() {
    console.log("Hola, soy", this.name);
  }
}
