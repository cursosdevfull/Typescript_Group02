"use strict";
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "MALE";
    GENDER["FEMALE"] = "FEMALE";
})(GENDER || (GENDER = {}));
function combine(input1, input2, gender, resultConversion) {
    if (typeof input1 === "string" &&
        typeof input2 === "string" &&
        resultConversion === "result-string") {
        return input1 + " " + input2;
    }
    else if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        resultConversion === "result-number") {
        return input1 + input2;
    }
}
const combineNames = combine("Max", "Anna", GENDER.MALE, "result-string");
console.log(combineNames);
const combineAges = combine(30, 26, GENDER.FEMALE, "result-number");
console.log(combineAges);
function printUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
const routes = [
    {
        path: "/",
        component: "HomeComponent",
        callback: (message) => {
            console.log("message Home", message);
        },
    },
    {
        path: "/about",
        component: "AboutComponent",
        callback: (message) => {
            console.log("message About", message);
        },
    },
];
function createRoute(route) {
    console.log(`Path: ${route.path}, Component: ${route.component}`);
    route.callback("Hola Mundo");
}
for (const route of routes) {
    createRoute(route);
}
