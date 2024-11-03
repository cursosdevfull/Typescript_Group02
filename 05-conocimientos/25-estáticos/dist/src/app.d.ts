declare class Database {
    static host: string;
    static protocol: string;
    static port: number;
    static user: string;
    static password: string;
    version: string;
    static getConnection(): string;
    createConnection(): string;
    closeConnection(): void;
}
declare const database: Database;
