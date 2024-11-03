"use strict";
class Person {
    constructor() {
        this.name = "John";
        this.email = "john@email.com";
        this.password = "1234";
    }
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
//# sourceMappingURL=app.js.map