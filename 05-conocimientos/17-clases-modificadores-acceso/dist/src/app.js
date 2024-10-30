"use strict";
class User {
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.userId = Math.floor(Math.random() * 1000);
    }
    printUser() {
        console.log(`User: ${this.name}, ${this.age}, ${this.email}`);
    }
}
const user = new User("Javier", 30, "javier@email.com", "1234");
user.printUser();
//user.userId = 7000;
console.log(user);
//# sourceMappingURL=app.js.map