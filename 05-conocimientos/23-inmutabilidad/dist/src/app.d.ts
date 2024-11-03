declare class User {
    readonly userId: number;
    name: string;
    private email;
    private password;
    constructor(name: string, email: string, password: string);
    properties(): {
        name: string;
        email: string;
        password: string;
    };
    update(email: string): void;
}
declare const user: User;
