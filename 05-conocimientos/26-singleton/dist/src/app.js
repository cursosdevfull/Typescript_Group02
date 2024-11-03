"use strict";
class Database {
    constructor() {
        this.random = Math.random();
    }
    static createInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
}
const database1 = Database.createInstance();
console.log(database1.random);
const database2 = Database.createInstance();
console.log(database2.random);
const database3 = Database.createInstance();
console.log(database3.random);
class UserService {
    constructor() {
        this.users = [];
    }
    static createInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
}
const userService1 = UserService.createInstance();
userService1.addUser("user1");
userService1.addUser("user2");
const userService2 = UserService.createInstance();
console.log(userService2.getUsers());
//# sourceMappingURL=app.js.map