"use strict";
class BaseComponent {
    constructor() {
        this.totalRecords = 0;
        this.pageSize = 40;
        this.currentPage = 0;
    }
    getPage() {
        const page = this.data.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
        this.showNotification("Getting page...");
    }
}
//const baseComponent = new BaseComponent();
class UserComponent extends BaseComponent {
    constructor() {
        super();
        this.data = [];
        this.totalRecords = 10;
    }
    showNotification(message) {
        console.log(message);
    }
}
const user = new UserComponent();
console.log(user.totalRecords);
//# sourceMappingURL=app.js.map