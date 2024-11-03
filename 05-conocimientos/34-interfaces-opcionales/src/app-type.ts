type WithName2 = {
  readonly name: string;
  outputName?: string;
};

type WithGreetings2 = WithName2 & { greet(phrase: string): string };

class Person2 implements WithGreetings2 {
  name: string;
  outputName?: string;

  constructor(name: string, outputName?: string) {
    this.name = name;

    if (outputName) this.outputName = outputName;
  }

  greet(phrase: string): string {
    if (this.outputName) {
      return `Hi, I'm ${this.outputName} and I say ${phrase}`;
    }
    return `Hi, I'm ${this.name} and I say ${phrase}`;
  }
}

const person: Person2 = new Person2("John", "Johnny");
console.log(person.greet("Hello!"));
const person2: Person2 = new Person2("Jane");
console.log(person2.greet("Hola!"));
