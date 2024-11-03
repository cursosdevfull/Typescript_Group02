class Person {
  name: string = "John";
  protected email: string = "john@email.com";
  password: string = "1234";
}

class Developer extends Person {
  getInfoDeveloper() {
    return `Developer: ${this.name} / ${this.email}`;
  }
}

class DeveloperCloud extends Developer {
  getInfoDeveloperCloud() {
    return `DeveloperCloud: ${this.name} / ${this.email}`;
  }
}

const person = new Person();
console.log(person.name);

const developerCloud = new DeveloperCloud();
console.log(developerCloud.getInfoDeveloper());
//console.log(person.email); // Error
