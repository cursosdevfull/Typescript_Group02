"use strict";
class User {
    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
class UserDatabase {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!UserDatabase.instance) {
            UserDatabase.instance = new UserDatabase();
        }
        return UserDatabase.instance;
    }
    get(id) {
        return this.users.find((user) => user.id === id);
    }
    list() {
        return this.users;
    }
    add(user) {
        this.users.push(user);
    }
    log(message) {
        console.log(message);
    }
}
const userDatabase = UserDatabase.getInstance();
userDatabase.add(new User(1, "admin", "admin", "user01@email.com"));
userDatabase.add(new User(2, "user", "user", "user02.email.com"));
console.log(userDatabase.list());
console.log("get user 1", userDatabase.get(1));
//# sourceMappingURL=app.js.map