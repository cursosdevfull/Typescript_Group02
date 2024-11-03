"use strict";
class User {
    constructor(name, email, password) {
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)) {
            throw new Error("Invalid email");
        }
        this.name = name;
        this.email = email;
        this.password = password;
        this.userId = Math.floor(Math.random() * 1000);
    }
    properties() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
        };
    }
    update(email) {
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)) {
            throw new Error("Invalid email");
        }
        this.email = email;
    }
}
const user = new User("John Doe", "john@email.com", "123456");
console.log(user.userId);
//console.log(user.email);
console.log(user.properties());
user.update("nuevo@email.com");
console.log(user.properties());
//user.properties().email = "xxxxyyyycom";
//user.email = "xxxxyyyycom";
//console.log(user.email);
//console.log(user.password);
//user.userId = 1000;
//console.log(user.userId);
//# sourceMappingURL=app.js.map