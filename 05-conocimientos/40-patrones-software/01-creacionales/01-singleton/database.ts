export class Database {
  private static instance: Database;

  private constructor() {
    console.log("Conexión a base de datos realizada");
  }

  static getInstanceDatabase(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  private connection(): Promise<string> {
    return new Promise((resolve, reject) => {
      const executionTime = Math.floor(Math.random() * 1000) + 500;
      console.log(`Time execution: ${executionTime}`);

      setTimeout(() => {
        const connectionDB = `connection: ${new Date().toISOString()}`;
        resolve(connectionDB);
      }, executionTime);
    });
  }

  async getConnection(): Promise<string> {
    return await this.connection();
  }
}
