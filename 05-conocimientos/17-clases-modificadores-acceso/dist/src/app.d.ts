declare class User {
    private userId;
    private name;
    private age;
    private email;
    private password;
    constructor(name: string, age: number, email: string, password: string);
    printUser(): void;
}
declare const user: User;
