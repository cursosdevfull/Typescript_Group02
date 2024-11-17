import { Researcher, Strategy, Student, TBook, Teacher } from "./strategy";

const student = new Student();
const teacher = new Teacher();
const researcher = new Researcher();
const strategy = new Strategy();

const book01: TBook | undefined = strategy.findBookByRole(researcher, "NodeJS");
const book02: TBook | undefined = strategy.findBookByRole(student, "NodeJS");
const book03: TBook | undefined = strategy.findBookByRole(researcher, "NodeJS");
const book04: TBook | undefined = strategy.findBookByRole(teacher, "NodeJS");
const book05: TBook | undefined = strategy.findBookByRole(student, "NodeJS");
const book06: TBook | undefined = strategy.findBookByRole(researcher, "NodeJS");
const book07: TBook | undefined = strategy.findBookByRole(teacher, "NodeJS");

console.log("researcher", book01);
console.log("student", book02);
console.log("researcher", book03);
console.log("teacher", book04);
console.log("student", book05);
console.log("researcher", book06);
console.log("teacher", book07);
