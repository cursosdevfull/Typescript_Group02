class Person {
  constructor(public name: string, public age: number, public email: string) {}
}

type PersonKeys = keyof Person;

function getPersonProperty(person: Person, prop: PersonKeys) {
  return person[prop];
}

const person = new Person("John Doe", 30, "john.doe@email.com");

const personName = getPersonProperty(person, "name");
console.log("personName", personName);
