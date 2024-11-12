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
function Component(props) {
    return (target) => {
        const element = document.querySelector(props.selector);
        console.log("element", element);
        if (element) {
            element.innerHTML = props.template;
            console.log("constructor", target.constructor);
            const instance = new target();
            //console.log("current date from Component", instance.currentDate);
            //console.log("list", instance.productList);
            const button = element.querySelector("button");
            button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
                instance.showProducts = instance.showProducts.bind(instance);
                instance.showProducts();
            });
        }
    };
}
function MinQuantity(min) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log("Arguments:", args);
            if (args[1] < min)
                throw "Quantity is too low";
            originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
let Inventory = class Inventory {
    constructor() {
        this.productList = [];
        this.currentDate = new Date();
    }
    addProduct(productName, quantity) {
        console.log("Date from addProduct", this.currentDate);
        this.productList.push({ productName, quantity });
        console.log("Product added:", productName);
        console.log("Products", this.productList);
        console.log("this", this);
    }
    showProducts() {
        console.log("Show products");
        console.log("this showProducts", this);
        console.log(this.productList);
    }
};
__decorate([
    MinQuantity(50),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Inventory.prototype, "addProduct", null);
Inventory = __decorate([
    Component({
        selector: "#app",
        template: `<button id="show-product">Show products</button>`,
    })
], Inventory);
const inventory = new Inventory();
inventory.addProduct("Laptop", 60);
//# sourceMappingURL=app2.js.map