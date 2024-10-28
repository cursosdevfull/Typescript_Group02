function combine(input1, input2) {
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toUpperCase();
    }
    else if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
}
var combineNames = combine("Max", "Anna");
console.log(combineNames);
var combineAges = combine(30, 26);
console.log(combineAges);
