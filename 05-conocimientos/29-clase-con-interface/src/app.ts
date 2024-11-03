class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string
  ) {}
}

interface UserOperationsWithDatabase {
  get(id: number): User | undefined;
  list(): User[];
  add(user: User): void;
}

interface ILogger {
  log(message: string): void;
}

class UserDatabase implements UserOperationsWithDatabase, ILogger {
  private static instance: UserDatabase;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): UserDatabase {
    if (!UserDatabase.instance) {
      UserDatabase.instance = new UserDatabase();
    }

    return UserDatabase.instance;
  }

  get(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  list() {
    return this.users;
  }

  add(user: User): void {
    this.users.push(user);
  }

  log(message: string): void {
    console.log(message);
  }
}

const userDatabase = UserDatabase.getInstance();
userDatabase.add(new User(1, "admin", "admin", "user01@email.com"));
userDatabase.add(new User(2, "user", "user", "user02.email.com"));

console.log(userDatabase.list());
console.log("get user 1", userDatabase.get(1));
