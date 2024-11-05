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
function Component(config) {
    return function (constructor) {
        console.log("Rendering component...");
        console.log("selector", config.selector);
        const el = document.querySelector(config.selector);
        console.log("el", el);
        const instance = new constructor();
        if (el) {
            el.innerHTML = config.template;
            el.querySelector("h1").textContent = instance.name;
        }
    };
}
function NewLogger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = "Javier Heraud";
        console.log("Hola, soy", this.name);
    }
};
Person = __decorate([
    Component({
        selector: "#app",
        template: "<h1>Hola Mundo</h1>",
    }),
    NewLogger("Logging - Person"),
    __metadata("design:paramtypes", [])
], Person);
//# sourceMappingURL=app.js.map