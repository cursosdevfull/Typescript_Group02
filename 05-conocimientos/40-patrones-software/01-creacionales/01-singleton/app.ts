import { Database } from "./database";

(async () => {
  const database = Database.getInstanceDatabase();
  const connection = await database.getConnection();
})();
