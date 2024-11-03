declare class Person {
    name: string;
    protected email: string;
    password: string;
}
declare class Developer extends Person {
    getInfoDeveloper(): string;
}
declare class DeveloperCloud extends Developer {
    getInfoDeveloperCloud(): string;
}
declare const person: Person;
declare const developerCloud: DeveloperCloud;
