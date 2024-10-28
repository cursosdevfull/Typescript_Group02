function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + " " + input2;
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
}

const combineNames = combine("Max", "Anna");
console.log(combineNames);

const combineAges = combine(30, 26);
console.log(combineAges);
