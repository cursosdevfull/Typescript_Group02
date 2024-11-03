interface Repository {
  id: number;
  username: string;
  password: string;
  email: string;
}

interface UserRepository extends Repository {
  findByUserName(username: string): any;
}

class UserDatabase implements UserRepository {
  id: number;
  username: string;
  password: string;
  email: string;

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;

    this.id = Math.floor(Math.random() * 1000);
  }

  findByUserName(username: string) {
    throw new Error("Method not implemented.");
  }
}
