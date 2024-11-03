class Database {
  static host: string = "localhost";
  static protocol: string = "https";
  static port: number = 3306;
  static user: string = "123";
  static password: string = "fasf";
  version: string = "1.0";

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

console.log(Database.getConnection());
//console.log(Database.createConnection());

const database = new Database();
console.log(database.createConnection());

/* const database = new Database();
console.log(database.createConnection());
console.log(database.getConnection());
console.log(database.closeConnection); */
