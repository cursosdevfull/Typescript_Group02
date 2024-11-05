"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Book(props) {
    return function (constructor) {
        const element = document.querySelector(props.selector);
        const instance = new constructor();
        if (element) {
            element.innerHTML = `<h1>${props.isUpper
                ? instance.title.toUpperCase()
                : instance.title.toLowerCase()}`;
        }
    };
}
function Log01(prefix) {
    return function (target, propertyKey) {
        console.log("target", target, propertyKey);
        console.log("property", propertyKey);
        let value;
        const getter = () => {
            console.log("getter");
            return value;
        };
        const setter = (newValue) => {
            console.log("setter");
            value = `${prefix}: ${newValue}`;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
let Product = class Product {
    constructor() {
        this.title = "ProductTitle";
    }
};
__decorate([
    Log01("Libro"),
    __metadata("design:type", Object)
], Product.prototype, "title", void 0);
Product = __decorate([
    Book({ selector: "#app", isUpper: true })
], Product);
//# sourceMappingURL=app.js.map