interface Repository {
  id: number;
  username: string;
  password: string;
  email: string;
}

class User {
  private readonly id: number;
  private username: string;
  private password: string;
  private email: string;

  constructor(props: IUser) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
  }
}

const userProperties: Readonly<IUser> = {
  id: 20,
  username: "juan.memail",
  password: "123456",
  email: "juan@email.com",
};

const user = new User(userProperties);
console.log(user);
