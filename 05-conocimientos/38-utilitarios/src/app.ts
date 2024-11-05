interface UserRequiredProps {
  name: string;
  lastname: string;
  email: string;
  password?: string;
}

interface UserOptionalProps {
  age: number;
  gender: string;
  userId: number;
}

type UserProps = Partial<
  Required<UserRequiredProps> & Partial<UserOptionalProps>
>;

type UserFieldsUpdate = Pick<UserProps, "name" | "lastname" | "password"> &
  Omit<UserOptionalProps, "userId">;

type Address = Record<string, string | number | boolean>

class User {
  private readonly userId: number | undefined;
  private name: string | undefined;
  private lastname: string  | undefined;
  private email: string |  | undefined;
  private password: string | undefined;
  private age: number | undefined;
  private gender: string | undefined;
  private address: Address = {district: "San Isidro", city: "Lima"};

  constructor(props: UserProps) {
    this.name = props.name;
    this.lastname = props.lastname;
    this.email = props.email;
    this.password = props.password;

    if (props.userId) this.userId = props.userId;
    if (props.age) this.age = props.age;
    if (props.gender) this.gender = props.gender;

    if (!this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{3,4}$/g)) {
      console.log("Email correcto");
    }
  }

  properties() {
    return {
      userId: this.userId,
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      age: this.age,
    };
  }

  update(info: UserFieldsUpdate) {
    Object.assign(this, info);
  }
}
