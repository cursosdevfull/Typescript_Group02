"use strict";
class Accounting {
    constructor() {
        this.persons = [];
    }
    set addPerson(name) {
        //if (name.length < 5) throw new Error("Name is too short");
        this.persons.push(name.toUpperCase());
    }
    get addPerson() {
        return this.persons.join(", ");
    }
}
const accounting = new Accounting();
accounting.addPerson = "Max";
accounting.addPerson = "Manu";
console.log(accounting);
console.log(accounting.addPerson);
//# sourceMappingURL=app.js.map