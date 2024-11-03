abstract class BaseComponent {
  abstract data: any[];
  totalRecords = 0;

  pageSize = 40;
  currentPage = 0;

  getPage(): any {
    const page = this.data.slice(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );

    this.showNotification("Getting page...");
  }

  abstract showNotification(message: string): void;
}

//const baseComponent = new BaseComponent();

class UserComponent extends BaseComponent {
  data = [];

  constructor() {
    super();
    this.totalRecords = 10;
  }

  showNotification(message: string): void {
    console.log(message);
  }
}

const user = new UserComponent();
console.log(user.totalRecords);
