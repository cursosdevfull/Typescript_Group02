declare class Database {
    random: number;
    private static instance;
    private constructor();
    static createInstance(): Database;
}
declare const database1: Database;
declare const database2: Database;
declare const database3: Database;
declare class UserService {
    private static instance;
    users: string[];
    private constructor();
    static createInstance(): UserService;
    addUser(user: string): void;
    getUsers(): string[];
}
declare const userService1: UserService;
declare const userService2: UserService;
