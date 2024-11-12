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
// Decorador de clase que añade la funcionalidad de renderizar la lista de productos
function ProductList(config) {
    return function (target) {
        const original = target;
        /*const newConstructor: any = function (...args: any[]) {
          const instance = new original(...args);
          instance.render();
          return instance;
        };*/
        target.prototype.render = function () {
            console.log("execute render");
            const productList = document.getElementById(config.selector);
            if (productList) {
                productList.innerHTML = ""; // Limpiar la lista existente
                console.log("this.products", this.products);
                console.log("length", this.products.length);
                this.products.forEach((product) => {
                    const itemHtml = config.template(product);
                    const item = document.createElement("li");
                    item.innerHTML = itemHtml;
                    productList.appendChild(item);
                });
            }
            /*       if (productList) {
              productList.innerHTML = "";
              this.products.forEach((product: string) => {
                const item = document.createElement("li");
                item.textContent = product;
                productList.appendChild(item);
              });
            } */
        };
        console.log("newConstructor", target.prototype);
        return target;
    };
}
// Decorador de propiedad que añade un producto a la lista
function AddProduct(target, propertyKey) {
    console.log("target", target);
    let value;
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        console.log("target2", target);
        value = newValue;
        console.log("value", value);
        target.render(); // Llama a render después de añadir un producto
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}
// Clase Product que utiliza los decoradores
let Product = class Product {
    constructor() {
        this.products = [];
        this.init();
    }
    init() {
        const addButton = document.getElementById("add-button");
        const inputField = document.getElementById("product-input");
        if (addButton) {
            addButton.addEventListener("click", () => {
                const productName = inputField.value;
                if (productName) {
                    this.products = [...this.products, productName]; // Usa el setter
                    inputField.value = ""; // Limpiar el campo de entrada
                }
            });
        }
    }
};
__decorate([
    AddProduct,
    __metadata("design:type", Array)
], Product.prototype, "products", void 0);
Product = __decorate([
    ProductList({
        selector: "product-list",
        template: (product) => `<span>${product}</span>`,
    }),
    __metadata("design:paramtypes", [])
], Product);
// Inicializar la clase Product
const productApp = new Product();
//# sourceMappingURL=app.js.map