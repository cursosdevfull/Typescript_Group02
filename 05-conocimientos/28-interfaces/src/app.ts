interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
  isAdult(): boolean;
}

let persona: IPerson = {
  firstname: "Juan",
  lastname: "Perez",
  age: 30,
  isAdult() {
    return this.age >= 18;
  },
};
