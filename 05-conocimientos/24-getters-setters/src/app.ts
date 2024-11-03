class Accounting {
  private persons: string[] = [];

  set addPerson(name: string) {
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
