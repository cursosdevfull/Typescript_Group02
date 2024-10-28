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
var combineNames = combine("Max", "Anna", GENDER.MALE, "result-string");
console.log(combineNames);
var combineAges = combine(30, 26, GENDER.FEMALE, "result-number");
console.log(combineAges);
function printUser(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
var routes = [
    {
        path: "/",
        component: "HomeComponent",
        callback: function (message) {
            console.log(message);
        },
    },
    {
        path: "/about",
        component: "AboutComponent",
        callback: function (message) {
            console.log(message);
        },
    },
];
function createRoute(route) {
    console.log("Path: ".concat(route.path, ", Component: ").concat(route.component));
    route.callback("Hello World");
}
for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
    var route = routes_1[_i];
    createRoute(route);
}
