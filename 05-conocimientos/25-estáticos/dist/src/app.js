"use strict";
class Database {
    constructor() {
        this.version = "1.0";
    }
    static getConnection() {
        return `${Database.protocol}://${Database.host}:${Database.port}/${Database.user}/${Database.password}`;
    }
    createConnection() {
        return `Connection to ${Database.getConnection()}`;
    }
    closeConnection() {
        console.log("Connection closed", this.version);
    }
}
Database.host = "localhost";
Database.protocol = "https";
Database.port = 3306;
Database.user = "123";
Database.password = "fasf";
console.log(Database.getConnection());
//console.log(Database.createConnection());
const database = new Database();
console.log(database.createConnection());
/* const database = new Database();
console.log(database.createConnection());
console.log(database.getConnection());
console.log(database.closeConnection); */
//# sourceMappingURL=app.js.map