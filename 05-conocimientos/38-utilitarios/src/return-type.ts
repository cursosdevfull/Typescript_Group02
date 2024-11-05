class UserSystem {
  constructor(public name: string, public age: number) {}

  getUserInfo() {
    return {
      name: this.name,
      age: this.age,
      isAdult: this.age >= 18,
    };
  }
}

type UserSystemInfo = ReturnType<UserSystem["getUserInfo"]>;

function showUserInfo(user: UserSystem): UserSystemInfo {
  return user.getUserInfo();
}

const user = new UserSystem("John Doe", 30);
const userInfo = showUserInfo(user);
console.log(userInfo.age);
