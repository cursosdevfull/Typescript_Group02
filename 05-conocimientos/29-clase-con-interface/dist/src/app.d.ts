declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    constructor(id: number, username: string, password: string, email: string);
}
interface UserOperationsWithDatabase {
    get(id: number): User | undefined;
    list(): User[];
    add(user: User): void;
}
interface ILogger {
    log(message: string): void;
}
declare class UserDatabase implements UserOperationsWithDatabase, ILogger {
    private static instance;
    private users;
    private constructor();
    static getInstance(): UserDatabase;
    get(id: number): User | undefined;
    list(): User[];
    add(user: User): void;
    log(message: string): void;
}
declare const userDatabase: UserDatabase;
