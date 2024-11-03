declare abstract class BaseComponent {
    abstract data: any[];
    totalRecords: number;
    pageSize: number;
    currentPage: number;
    getPage(): any;
    abstract showNotification(message: string): void;
}
declare class UserComponent extends BaseComponent {
    data: never[];
    constructor();
    showNotification(message: string): void;
}
declare const user: UserComponent;
